 // Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDjwdgYj8qOSQfIVfXbJ13KyecC4KWl7OU",
  authDomain: "firsttry-baf92.firebaseapp.com",
  projectId: "firsttry-baf92",
  storageBucket: "firsttry-baf92.appspot.com",
  messagingSenderId: "889671739739",
  appId: "1:889671739739:web:1e79aa6805ce8827e7d27e",
  measurementId: "G-9MNKPMP5S5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
console.log(app)