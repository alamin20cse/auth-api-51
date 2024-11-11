// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDcG3iirGKcrQzAQfsDFfyxU4v3CZztmKs",
  authDomain: "auth-api-51.firebaseapp.com",
  projectId: "auth-api-51",
  storageBucket: "auth-api-51.firebasestorage.app",
  messagingSenderId: "385543789452",
  appId: "1:385543789452:web:7160ff698a1c961d1654a9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);