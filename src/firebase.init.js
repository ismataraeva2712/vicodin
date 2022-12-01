// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCAhNSWFzrQV7Lqx3z7zSKwi-gd09F1xOM",
  authDomain: "vicodin-pharma.firebaseapp.com",
  projectId: "vicodin-pharma",
  storageBucket: "vicodin-pharma.appspot.com",
  messagingSenderId: "28399542577",
  appId: "1:28399542577:web:590c7cd37cfd16fb015010"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app);

export default auth;