// Update the clientId and redirectUri for your application
var oAuthData = {
  clientId: '66f9234f-0041-48e7-9e98-575e3de2c745',
  redirectUri: 'http://localhost:8888/callback.php',
  scopes: ['openid', 'Notes.ReadWrite', 'offline_access'],
  grantTokenUrl: 'https://login.microsoftonline.com/common/oauth2/v2.0/token',
  authUrl: 'https://login.microsoftonline.com/common/oauth2/v2.0/authorize'
};

var baseRequestUrl = 'https://www.graph.microsoft.com/beta/me/notes';

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

function displayMe() {
  console.log(document.cookie);
  var imgHolder = id('meImg'),
  nameHolder = id('meName');

  if (imgHolder.innerHTML != '') return;

  if (WL.getSession() != null) {
    WL.api({ path: 'me/picture', method: 'get' }).then(
      function (response) {
        if (response.location) {
          imgHolder.innerHTML = '<img src="" + response.location + "" />';
        }
      }
    );

    WL.api({ path: 'me', method: 'get' }).then(
      function (response) {
        nameHolder.innerHTML = response.name;
      }
    );
  }
}

function clearMe() {
  id('meImg').innerHTML = '';
  id('meName').innerHTML = '';
}

document.addEventListener('authStateChanged', function(e) {
  console.log('auth changed!', e);
  if (e.session) {
    displayMe();
  }
  else {
    clearMe();
  }
});

// WL.init({ client_id: client_id, redirect_uri: redirect_uri, response_type: 'code', scope: scope });
