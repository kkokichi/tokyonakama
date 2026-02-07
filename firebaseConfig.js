// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDubc2FGMimITJS_MXbzgLY_G1nO_NoAI0",
  authDomain: "tokyonakama-e7331.firebaseapp.com",
  projectId: "tokyonakama-e7331",
  storageBucket: "tokyonakama-e7331.firebasestorage.app",
  messagingSenderId: "538079381768",
  appId: "1:538079381768:web:af9fcb02569c266279c4bd",
  measurementId: "G-BWM0Q87Q93"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);

export { app, analytics, auth, db };