import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAQxmmIhOMkurCxvTH0tZGpIj2joSMi850",
  authDomain: "biobite-175f4.firebaseapp.com",
  projectId: "biobite-175f4",
  storageBucket: "biobite-175f4.firebasestorage.app",
  messagingSenderId: "89216833430",
  appId: "1:89216833430:web:2451c8a37f49c7f098efb7"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const googleProvider = new GoogleAuthProvider();
