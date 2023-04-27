
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getStorage } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore/lite';
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAaccF2c64kfnoJFy8G4RmhYGI7ohOKrE4",
  authDomain: "silent-oxide-383705.firebaseapp.com",
  projectId: "silent-oxide-383705",
  storageBucket: "silent-oxide-383705.appspot.com",
  messagingSenderId: "554076203307",
  appId: "1:554076203307:web:b67a7058cfc8aa989bfd6e",
  measurementId: "G-ND3KFPD5QQ"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth();
const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
export const storage = getStorage(app);
const analytics = getAnalytics(app);

export const signInWithGoogle = () => signInWithPopup(auth, provider);