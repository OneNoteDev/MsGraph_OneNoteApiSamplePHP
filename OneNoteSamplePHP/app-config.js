// Update the following values
var client_id = '66f9234f-0041-48e7-9e98-575e3de2c745',
  scope = ['openid', 'Notes.ReadWrite', 'offline_access'],
  redirect_uri = 'http://localhost:8888/callback.php',
  refresh_token_url = 'https://login.microsoftonline.com/common/oauth2/v2.0/token',
  auth_url = 'https://login.microsoftonline.com/common/oauth2/v2.0/authorize?';


function id(domId) {
    return document.getElementById(domId);
}

function displayMe() {
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

WL.Event.subscribe('auth.sessionChange',
    function (e) {
        if (e.session) {
            displayMe();
        }
        else {
            clearMe();
        }
    }
);

WL.init({ client_id: client_id, redirect_uri: redirect_uri, response_type: 'code', scope: scope });

WL.ui({ name: 'signin', element: 'signin' });
