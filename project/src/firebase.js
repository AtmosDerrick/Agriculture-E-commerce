// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC48HHSpEV6kd6CEpyu0rIBHXZTRWTnIOk",
  authDomain: "agro-solution-4e4ba.firebaseapp.com",
  projectId: "agro-solution-4e4ba",
  storageBucket: "agro-solution-4e4ba.appspot.com",
  messagingSenderId: "394400814170",
  appId: "1:394400814170:web:c34435766593d0e7c27463",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getDatabase(app);
export const storage = getStorage(app);
