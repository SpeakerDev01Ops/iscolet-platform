// Firebase core and services
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyBKeyiqQcburdlpfAjG7lEkhwScWjrbQe0",
  authDomain: "iscolet-b48bb.firebaseapp.com",
  projectId: "iscolet-b48bb",
  storageBucket: "iscolet-b48bb.firebasestorage.app",
  messagingSenderId: "80885898949",
  appId: "1:80885898949:web:9159ca1dbea5ba617d5aac",
  measurementId: "G-8FYBRY3RGQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize services
const auth = getAuth(app);
const db = getFirestore(app);

// Export initialized services
export { auth, db };
