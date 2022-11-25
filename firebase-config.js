// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyANrCpaApogZWAppAaP9kgqcSpOe-JL0Ew",
  authDomain: "csc332-3235d.firebaseapp.com",
  projectId: "csc332-3235d",
  storageBucket: "csc332-3235d.appspot.com",
  messagingSenderId: "924453674210",
  appId: "1:924453674210:web:17b0cb3033e6cfeb7c52bb",
  measurementId: "G-NKLNTQQ0PR"
};

// Initialize Firebase
/*
var app;
if (!firebase || !firebase.apps) {
    app = initializeApp(firebaseConfig);
}else {
    app = firebase.app(); // if already initialized, use that one
}*/
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
/*
let analytics;
if (app.name && typeof window !== 'undefined') {
    analytics = getAnalytics(app);
}
export const analytics;*/
