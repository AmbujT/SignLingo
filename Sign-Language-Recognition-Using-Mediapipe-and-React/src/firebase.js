import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyA9ncYbHWZioIHx4akyf5VZPVnGEDSz60I",
  authDomain: "smartsignlang.firebaseapp.com",
  projectId: "smartsignlang",
  storageBucket: "smartsignlang.appspot.com",
  messagingSenderId: "937136969742",
  appId: "1:937136969742:web:bf89d5739d2827eff2c45f",
  measurementId: "G-4KPZ8QGS4H"
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();

export { firebase, auth, db};