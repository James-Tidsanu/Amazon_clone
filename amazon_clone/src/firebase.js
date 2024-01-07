import { initializeApp } from 'firebase/app';
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore/lite';


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAlJrpA3SlujTawv57bCMqxfMFlheMzUII",
  authDomain: "fir-cfcbc.firebaseapp.com",
  projectId: "fir-cfcbc",
  storageBucket: "fir-cfcbc.appspot.com",
  messagingSenderId: "1051316377127",
  appId: "1:1051316377127:web:247fa312d83f5ffa836002",
  measurementId: "G-TLY5QJ47SJ"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);


const auth = getAuth(app);

export { db, auth };
