import firebase from 'firebase'


var config = {
    apiKey: "AIzaSyDl5Iahc0gfcdJ_OycFw3cFnPA6vK2GGDI",
    authDomain: "karaoke-6876e.firebaseapp.com",
    databaseURL: "https://karaoke-6876e.firebaseio.com",
    projectId: "karaoke-6876e",
    storageBucket: "karaoke-6876e.appspot.com",
    messagingSenderId: "603772681466"
  };

if (!firebase.apps.length) {
	firebase.initializeApp(config);
}

const auth = firebase.auth();

export {
	firebase,
	auth,
}