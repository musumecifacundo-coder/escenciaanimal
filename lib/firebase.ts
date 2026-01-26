// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAny_MYSqtgerz596WOZPqgT-70mXbCUnw",
    authDomain: "escenciaanimal-ecaa9.firebaseapp.com",
    projectId: "escenciaanimal-ecaa9",
    storageBucket: "escenciaanimal-ecaa9.firebasestorage.app",
    messagingSenderId: "6899037512",
    appId: "1:6899037512:web:f7cef31c5e2205eb512f7d",
    measurementId: "G-R2PFJC7FJD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const db = getFirestore(app);
export const storage = getStorage(app);