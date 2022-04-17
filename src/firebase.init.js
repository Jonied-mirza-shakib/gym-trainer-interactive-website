// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCkszJ4RFqUmb9uNmwZIZflt-EH4Yw38B8",
    authDomain: "gym-trainer-909cb.firebaseapp.com",
    projectId: "gym-trainer-909cb",
    storageBucket: "gym-trainer-909cb.appspot.com",
    messagingSenderId: "440690386735",
    appId: "1:440690386735:web:d9d62424b9abd41ad3a3da"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;