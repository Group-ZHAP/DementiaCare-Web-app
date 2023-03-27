import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAOvVJUzIsNm9AEf0bL4tfS7lwBC0G6pog",
  authDomain: "job-listing-9ec1b.firebaseapp.com",
  projectId: "job-listing-9ec1b",
  storageBucket: "job-listing-9ec1b.appspot.com",
  messagingSenderId: "532362349089",
  appId: "1:532362349089:web:1d1966e4d1dba6979c3160",
  measurementId: "G-NYLJST6ZN0"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const firestore = firebase.firestore();
const app = firebase.app();

export { firebase, firestore, app };
