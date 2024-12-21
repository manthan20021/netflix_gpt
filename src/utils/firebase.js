// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDSRtnN9R20tr-xolbar8L6v3fWgsXukTw",
  authDomain: "nateflixgpt.firebaseapp.com",
  projectId: "nateflixgpt",
  storageBucket: "nateflixgpt.firebasestorage.app",
  messagingSenderId: "48596757528",
  appId: "1:48596757528:web:e3da63c3e2ba53f606276d",
  measurementId: "G-JKL42YH981"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
const analytics = getAnalytics(app);
