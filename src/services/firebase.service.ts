// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCjSGgus2uakmTFHPttDNraDcbkiaG6f_A",
  authDomain: "nusic-studio.firebaseapp.com",
  projectId: "nusic-studio",
  storageBucket: "nusic-studio.appspot.com",
  messagingSenderId: "1011362330176",
  appId: "1:1011362330176:web:281463bb0cb9de885f91a5",
  measurementId: "G-L0F097SSRM",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
