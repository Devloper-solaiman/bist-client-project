// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCKZZOLm5LPNz6XYtnzG1SoRyiMJgM6D_c",
    authDomain: "bistro-boss-972b4.firebaseapp.com",
    projectId: "bistro-boss-972b4",
    storageBucket: "bistro-boss-972b4.appspot.com",
    messagingSenderId: "92330933456",
    appId: "1:92330933456:web:e45e1e83d5b9faba9372d5",
    measurementId: "G-WRZXN28XW8"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);