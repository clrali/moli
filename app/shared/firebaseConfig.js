// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBOY17Lq8PJOOr-K2nfqhzqMxk6GO8pwqQ",
  authDomain: "moli-7fb53.firebaseapp.com",
  projectId: "moli-7fb53",
  storageBucket: "moli-7fb53.appspot.com",
  messagingSenderId: "781263188554",
  appId: "1:781263188554:web:94952d1ba7d34dc33cecb3",
  measurementId: "G-VHLYBSKH03"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app