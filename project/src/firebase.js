// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";
import "firebase/compat/firestore";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
// Firebase Analytics
import { getAnalytics } from "firebase/analytics";

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
  messagingSenderId: "637908496727",
  appId: "2:637908496727:web:a4284b4c99e329d5",
  measurementId: "G-9VP01NDSXJ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Analytics
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getDatabase(app);
export const storage = getStorage(app);
export const store = getFirestore(app);

// Export the necessary variables
export const firebaseAnalytics = analytics;
