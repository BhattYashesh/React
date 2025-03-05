// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCpgbj9sSuL_DVkrGDQ3owPQ5-lxPpjgaY",
  authDomain: "fir-project-8628e.firebaseapp.com",
  projectId: "fir-project-8628e",
  storageBucket: "fir-project-8628e.firebasestorage.app",
  messagingSenderId: "183665034583",
  appId: "1:183665034583:web:1af365bb2b5493e031aa12"
};

// Initialize Firebase
const app= initializeApp(firebaseConfig)
const auth = getAuth(app)
const db = getFirestore(app)

export {auth,db}