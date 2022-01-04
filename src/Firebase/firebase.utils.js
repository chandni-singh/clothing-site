import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const config = {
  apiKey: "AIzaSyAaWD1XiCYXbjyohRQlmvkNzYfRjrlkPVs",
  authDomain: "crown-db-c1e9f.firebaseapp.com",
  projectId: "crown-db-c1e9f",
  storageBucket: "crown-db-c1e9f.appspot.com",
  messagingSenderId: "853541472433",
  appId: "1:853541472433:web:9a7d36f62941b17aa57a90",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
