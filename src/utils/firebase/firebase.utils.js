// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import {
	getAuth,
	signInWithRedirect,
	signInWithPopup,
	GoogleAuthProvider,
} from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyB5QYMaFV5huzvZiSODx8M1OkWkAhTD6aQ",
	authDomain: "crwn-clothng-db.firebaseapp.com",
	projectId: "crwn-clothng-db",
	storageBucket: "crwn-clothng-db.appspot.com",
	messagingSenderId: "988116122770",
	appId: "1:988116122770:web:b47f030ccb840303c0ba4b",
};

// Initialize Firebase
const firebaseapp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
	prompt: "select_account",
});

export const auth = getAuth();
export const signInWithgooglePopup = () => signInWithPopup(auth, provider);
export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
	const userDocRef = doc(db, "users", userAuth.uid);
	console.log(userDocRef);
	const userSnapshot = await getDoc(userDocRef);
	if (!userSnapshot.exists()) {
		const { displayName, email } = userAuth;
		const createdAt = new Date();
		try {
			await setDoc(userDocRef, {
				displayName,
				email,
				createdAt,
			});
		} catch (e) {
			console.log("Error creating user", e.message);
		}
	}
	return userDocRef;
};
