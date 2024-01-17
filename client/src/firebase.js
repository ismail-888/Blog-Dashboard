// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {

  apiKey:import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-15a49.firebaseapp.com",
  projectId: "mern-blog-15a49",
  storageBucket: "mern-blog-15a49.appspot.com",
  messagingSenderId: "236886115166",
  appId: "1:236886115166:web:4571580facd0ebe7b5c5cf"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);