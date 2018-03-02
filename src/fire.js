import firebase from 'firebase'
import "firebase/firestore";
import { FIREBASE_CONFIG, TEST_FIREBASE_CONFIG } from "./config/config";


// choose which firebase account to use
const testing = false;

if (testing) {
  const app = firebase.initializeApp(TEST_FIREBASE_CONFIG);
  firebase.firestore(app);
} else {
  const app = firebase.initializeApp(FIREBASE_CONFIG);
  firebase.firestore(app);
}

// if (!firebase.apps.length) {
// 	firebase.initializeApp(config);
// }

const db = firebase.firestore();

const auth = firebase.auth();

export {
	firebase,
  auth,
  db,
}