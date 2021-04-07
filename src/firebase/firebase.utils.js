import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
    apiKey: "AIzaSyCP67WDVk04WEuA9FcEwZBgG9Jae7_EZok",
    authDomain: "crwn-clothing-6ee97.firebaseapp.com",
    projectId: "crwn-clothing-6ee97",
    storageBucket: "crwn-clothing-6ee97.appspot.com",
    messagingSenderId: "716090474068",
    appId: "1:716090474068:web:f6a976808f2cfef4d477c1",
    measurementId: "G-V0FYRWQ03V"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
