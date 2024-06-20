// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBuRbjpFJVPaCRkVie36HxfPSJreusMFUQ",
  authDomain: "betquick-71283.firebaseapp.com",
  projectId: "betquick-71283",
  storageBucket: "betquick-71283.appspot.com",
  messagingSenderId: "68163453703",
  appId: "1:68163453703:web:9364b8fc6a0b08770e7ba2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db }; 