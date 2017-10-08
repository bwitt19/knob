function onSignIn(googleUser) {
  var id_token = googleUser.getAuthResponse().id_token;
  var profile = googleUser.getBasicProfile();
  console.log('ID: ' + profile.getID()); // Don't send to backend! Use an ID token instead.
  console.log('Name: ' + profile.getName());
  console.log('Image URL: ' + profile.getImageUrl());
  console.log('Email: ' + profile.getEmail()); //this is null if the 'email' scope is not present
}

var xhr = new XMLHttpRequest();
xhr.open('POST', '/'); // supposed to be link to backend
xhr.setRequestHeader('Content-Type', '');
xhr.onload = function() {
  console.log('Signed in as: ' + xhr.responseText);
};
xhr.send('idtoken=' + id_token);
