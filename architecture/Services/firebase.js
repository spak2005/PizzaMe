// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDQs9moA4TD5p6lTh-RaT3wsIZEBZBVEwE",
  authDomain: "pizzame-7ab9b.firebaseapp.com",
  projectId: "pizzame-7ab9b",
  storageBucket: "pizzame-7ab9b.appspot.com",
  messagingSenderId: "536331484887",
  appId: "1:536331484887:web:e4c81ffe0aa66daa887a92"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export const db = getDatabase(app);
