import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore"; // Import Firestore

// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBSXxsLlqFEJOCKnyr6ATYSpyZwlM3bheM",
    authDomain: "vance-project.firebaseapp.com",
    projectId: "vance-project",
    storageBucket: "vance-project.firebasestorage.app",
    messagingSenderId: "643274167878",
    appId: "1:643274167878:web:2b13ed5f0edeebdb099c47",
    measurementId: "G-CMHHV9JSTQ",
};

// Initialize Firebase app
const app = initializeApp(firebaseConfig);

// Export authentication and Google provider
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

// Export Firestore instance
export const db = getFirestore(app);
