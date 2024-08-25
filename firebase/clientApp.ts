// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAtROCmW1Ox9ATV-xvSKL_OCMF6dbJOAYs",
  authDomain: "stress-is-stressful.firebaseapp.com",
  projectId: "stress-is-stressful",
  storageBucket: "stress-is-stressful.appspot.com",
  messagingSenderId: "533142977718",
  appId: "1:533142977718:web:cb9f1f5e1bf460b5b07a17",
  measurementId: "G-31BVZ03JZB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);