// Import the functions you need from the SDKs you need
import { initializeApp } from "@firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDPnx1HfzLrsFUOm3LAj8ZbWmUjZTZj1lg",
  authDomain: "drag-and-drop-gallery-8db49.firebaseapp.com",
  projectId: "drag-and-drop-gallery-8db49",
  storageBucket: "drag-and-drop-gallery-8db49.appspot.com",
  messagingSenderId: "995609604908",
  appId: "1:995609604908:web:3da6d2ccc4d92f7b6ab289"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export { app };