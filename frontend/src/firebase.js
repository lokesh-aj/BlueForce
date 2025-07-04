// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBZPdhDrlqRYGbXf5GiN7Mnqewmq6QC5zM",
  authDomain: "blueforce-c5a0f.firebaseapp.com",
  projectId: "blueforce-c5a0f",
  storageBucket: "blueforce-c5a0f.firebasestorage.app",
  messagingSenderId: "926812862987",
  appId: "1:926812862987:web:ecf900221853ba5231e50e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };