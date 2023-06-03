import React from "react";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAPUbxPFids53oWBMJ80TRJdiohE-GXvf0",
  authDomain: "software-development-893aa.firebaseapp.com",
  databaseURL: "https://software-development-893aa-default-rtdb.firebaseio.com",
  projectId: "software-development-893aa",
  storageBucket: "software-development-893aa.appspot.com",
  messagingSenderId: "934678694542",
  appId: "1:934678694542:web:0c906f26c9329c82ba17df",
  measurementId: "G-4J44M94VC8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;