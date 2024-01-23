import { initializeApp } from 'firebase/app';
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore/lite';
import firebase from './firebase'


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBzp-p3on6SVoTHTWP6j7uY3ExwOPeZoEw",
  authDomain: "challenge-124ba.firebaseapp.com",
  projectId: "challenge-124ba",
  storageBucket: "challenge-124ba.appspot.com",
  messagingSenderId: "1041116251471",
  appId: "1:1041116251471:web:ab02182fd9194da814313a",
  measurementId: "G-0NG1CDYWZV"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();


const auth = firebase.aututh();

export { db, auth };
