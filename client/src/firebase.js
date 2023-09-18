// src/firebase.js (or firebase.ts for TypeScript)
import firebase from 'firebase/app';
import 'firebase/auth';

// Firebase configuration object with your own credentials
const firebaseConfig = {
  // Your Firebase config here...
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

// Define an authentication provider,
export const auth = firebase.auth();
export const provider = new firebase.auth.GoogleAuthProvider();
