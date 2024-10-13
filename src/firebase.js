import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
   apiKey: "AIzaSyDBpJgxwmRORKC23XI80MfM767LOg2MiFo",
   authDomain: "chat-bc1c0.firebaseapp.com",
   projectId: "chat-bc1c0",
   storageBucket: "chat-bc1c0.appspot.com",
   messagingSenderId: "807190521586",
   appId: "1:807190521586:web:51ceaa7895ef67f07a926b"
 };

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth()
export const storage = getStorage();
export const db = getFirestore(app);