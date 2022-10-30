// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDEIQbriVCJcLLODNApwMTfD35DoEbMsoc",
  authDomain: "tamil-matrimony-aa70e.firebaseapp.com",
  projectId: "tamil-matrimony-aa70e",
  storageBucket: "tamil-matrimony-aa70e.appspot.com",
  messagingSenderId: "761250304818",
  appId: "1:761250304818:web:d3c403b03552af61d63d2b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app)
export default auth;