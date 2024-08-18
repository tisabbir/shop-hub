// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD54gEyzPZFr-QqbygBj2RDNkgqfsrxobE",
  authDomain: "shop-hub-b684f.firebaseapp.com",
  projectId: "shop-hub-b684f",
  storageBucket: "shop-hub-b684f.appspot.com",
  messagingSenderId: "440689993830",
  appId: "1:440689993830:web:e9b27027378e29eac0a5a7",
  measurementId: "G-MCY16E25RB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
const auth = getAuth(app);
export default auth;