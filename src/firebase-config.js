// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "@firebase/firestore";

// What I will need from firebase:
// 1. Firebase Auth - google auth
// 2. Firebase firestore - for storing data
// 3. coolections: Chat, Todo, Schedule

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCVZ782tC5ilBF2eUNxIYmstjF0_xceKBo",
  authDomain: "recamp-a2671.firebaseapp.com",
  projectId: "recamp-a2671",
  storageBucket: "recamp-a2671.appspot.com",
  messagingSenderId: "427121780405",
  appId: "1:427121780405:web:439b96ee5b7eb633de80fc",
  measurementId: "G-LQRE145LJN",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// getting auth
export const auth = getAuth(app);

export const provider = new GoogleAuthProvider();

// getting collection
export const db = getFirestore(app);
