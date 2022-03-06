import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";
const firebaseConfig = {
  apiKey: "AIzaSyCHCFbKLCT6GfQIY8Zn5f1qwKitTjAANaQ",
  authDomain: "onshoes-8b591.firebaseapp.com",
  projectId: "onshoes-8b591",
  storageBucket: "onshoes-8b591.appspot.com",
  messagingSenderId: "422540421670",
  appId: "1:422540421670:web:585e455bdf2cd1d4d394e7",
  measurementId: "G-J53R0LY91Y",
};
console.log(process.env.REACT_APP_API_KEY);
firebase.initializeApp(firebaseConfig);

const GoogleAuth = new firebase.auth.GoogleAuthProvider();
const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();
export { auth, db, storage, GoogleAuth };
