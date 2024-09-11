// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getFirestore } from "@firebase/firestore"; 
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getStorage } from "firebase/storage"

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAxe1BdBWo2HnoxOePqtfWTQZXeDIf-puM",
  authDomain: "familynightdinnerreg.firebaseapp.com",
  projectId: "familynightdinnerreg",
  storageBucket: "familynightdinnerreg.appspot.com",
  messagingSenderId: "844663867325",
  appId: "1:844663867325:web:277986da024a032961b4d4",
  measurementId: "G-77FY8JF8N1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const firestore = getFirestore(app);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app);
export const storage = getStorage(app);