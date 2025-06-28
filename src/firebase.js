// src/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCg3mK2o6aB43Dezr_06vv8fdsNtPWqtWU",
  authDomain: "viabhraman.firebaseapp.com",
  projectId: "viabhraman",
  storageBucket: "viabhraman.firebasestorage.app",
  messagingSenderId: "328376403434",
  appId: "1:328376403434:web:40a203f0a44d9257545e93",
  measurementId: "G-6LKRSZ3BEV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();