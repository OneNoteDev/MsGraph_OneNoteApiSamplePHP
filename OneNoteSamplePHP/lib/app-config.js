// Update the clientId, redirectUri, and scopes for your application
var oAuthData = {
  clientId: '66f9234f-0041-48e7-9e98-575e3de2c745',
  redirectUri: 'http://localhost:8888/callback.php',
  scopes: ['openid', 'Notes.ReadWrite', 'offline_access', 'User.ReadBasic.All'],
};

function id(domId) {
  return document.getElementById(domId);
}

function buildUrl() {
  return `https://login.microsoftonline.com/common/oauth2/v2.0/authorize?client_id=${oAuthData.clientId}&scope=
  ${oAuthData.scopes.join(' ')}&response_type=code&redirect_uri=${oAuthData.redirectUri}&response_mode=query`;
}

function login() {
  popupCenter(buildUrl(), 'Authorize OneNote PHP Sample', '700', '500');
}

// Source: http://www.xtf.dk
function popupCenter(url, title, w, h) {
  // Fixes dual-screen position                         Most browsers      Firefox
  var dualScreenLeft = window.screenLeft != undefined ? window.screenLeft : screen.left;
  var dualScreenTop = window.screenTop != undefined ? window.screenTop : screen.top;

  var width = window.innerWidth ? window.innerWidth : document.documentElement.clientWidth ? document.documentElement.clientWidth : screen.width;
  var height = window.innerHeight ? window.innerHeight : document.documentElement.clientHeight ? document.documentElement.clientHeight : screen.height;

  var left = ((width / 2) - (w / 2)) + dualScreenLeft;
  var top = ((height / 2) - (h / 2)) + dualScreenTop;
  var newWindow = window.open(url, title, 'scrollbars=yes, width=' + w + ', height=' + h + ', top=' + top + ', left=' + left);

  // Puts focus on the newWindow
  if (window.focus) {
    newWindow.focus();
  }
}

function findCookie(cookieName, cookieProperty) {
  var cookies = document.cookie.split('; ');
  for (var i = 0; i < cookies.length; i++) {
    var cookie = cookies[i];
    if (cookie.startsWith(cookieName)) {
      var accessToken = cookie.split(`${cookieProperty}=`)[1].split('&')[0];
      return accessToken;
    }
  }
}

function retrieveAccessToken() {
  return findCookie('graph_auth', 'access_token');
}

function findSessionState() {
  var sessionState = findCookie('session_state', 'session_state');
  return sessionState ? sessionState : 'Unauthorized';
}

function initiateXMLHttpRequest(resource, cb) {
  var token = retrieveAccessToken();
  var xhr = new XMLHttpRequest();

  if (token) {
    xhr.open('GET', `https://graph.microsoft.com/v1.0/me/${resource}/$value`);
    xhr.setRequestHeader('Authorization', `Bearer ${token}`);
    xhr.send(null);
  }

  xhr.onreadystatechange = function() {
    var DONE = 4;
    var OK = 200;
    if (xhr.readyState == DONE) {
      if (xhr.status == OK) cb(xhr);
    }
  };
}

function getUserProfilePicture() {
  initiateXMLHttpRequest('photo', function(xhr) {
    var imgHolder = id('meImg');
    imgHolder.innerHTML = `<img src="${xhr.responseText}" />`;
  });
}

function getUserProfileName() {
  initiateXMLHttpRequest('displayName', function(xhr) {
    var nameHolder = id('meName');
    nameHolder.innerHTML = xhr.responseText;
  });
}

function displayMe() {
  if (id('meImg').innerHTML != '') return;
  getUserProfilePicture();
  getUserProfileName();
}

function clearMe() {
  id('meImg').innerHTML = '';
  id('meName').innerHTML = '';
}

document.addEventListener('authStateChanged', function(e) {
  console.log('authStateChanged from event listener!');
  var sessionState = findSessionState();
  if (sessionState == 'Authorized') {
    displayMe();
  }
  else {
    clearMe();
  }
});
