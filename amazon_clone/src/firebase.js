import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";


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

const app = initializeApp(firebaseConfig);
const db = getFirestore();


const auth = getAuth(app);

export { db, auth };
