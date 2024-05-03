// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-state-4f374.firebaseapp.com",
  projectId: "mern-state-4f374",
  storageBucket: "mern-state-4f374.appspot.com",
  messagingSenderId: "446846281950",
  appId: "1:446846281950:web:e51eae82de34ee24277a4f",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
