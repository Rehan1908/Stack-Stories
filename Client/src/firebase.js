// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "stackstories-a6d32.firebaseapp.com",
  projectId: "stackstories-a6d32",
  storageBucket: "stackstories-a6d32.appspot.com",
  messagingSenderId: "621376266775",
  appId: "1:621376266775:web:8b3496c98366e8af01b252"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);