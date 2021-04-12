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

export const createUserProfileDocument = async (userAuthObject, ...otherData) => {
    if (!userAuthObject) return;

    const userRef = firestore.doc(`users/${userAuthObject.uid}`);

    const snapShot = await userRef.get();

    if (!snapShot.exists) {
        const { displayName, email } = userAuthObject;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...otherData
            });
            console.log("User created!");
        } catch (error) {
            console.log("Error creating user\n", error.message);
        }
    }

    return userRef;
};

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export const signInWithEmailAndPassword = async (email, password) => {
    try {
        await auth.signInWithEmailAndPassword(email, password);

        return true;
    } catch (error) {
        console.log(error);

        return false;
    }
};

export default firebase;
