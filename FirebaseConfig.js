 // Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyBFIaxHqLvPvlt0qE4D-_zAKSCLQ5QJpI8",
  authDomain: "fir-auth-f1a0a.firebaseapp.com",
  projectId: "fir-auth-f1a0a",
  storageBucket: "fir-auth-f1a0a.appspot.com",
  messagingSenderId: "559619250472",
  appId: "1:559619250472:web:c7dd044d447eef2467181d"
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
export const FIRESTORE_DB = getFirestore(FIREBASE_APP)