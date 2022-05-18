// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAwkc5m1LxlTtNBp4wRFAMoPDx2rOeAYms",
    authDomain: "linkedin-clone-c6796.firebaseapp.com",
    projectId: "linkedin-clone-c6796",
    storageBucket: "linkedin-clone-c6796.appspot.com",
    messagingSenderId: "729623786940",
    appId: "1:729623786940:web:1198d69a7a468cad9a67b9",
    measurementId: "G-F5KCZ1L3XZ"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { db, auth };