// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBXkAKYSGnMrNj5wkJpr1ZUovyzsJ5Sfeg",
    authDomain: "simple-firebase-authenti-d1e89.firebaseapp.com",
    projectId: "simple-firebase-authenti-d1e89",
    storageBucket: "simple-firebase-authenti-d1e89.appspot.com",
    messagingSenderId: "1017753169803",
    appId: "1:1017753169803:web:69bbc1377529478064498e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;