// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAX3iRC4Pj586w17-uQ2v8RnXvAaXYggHQ",
  authDomain: "netflix-gpt-581ce.firebaseapp.com",
  projectId: "netflix-gpt-581ce",
  storageBucket: "netflix-gpt-581ce.appspot.com",
  messagingSenderId: "412058602979",
  appId: "1:412058602979:web:0f5242025eb99516e7a4d6",
  measurementId: "G-GMLQEGN2LB",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
