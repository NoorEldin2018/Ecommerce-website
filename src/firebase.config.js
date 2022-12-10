import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBvnsybJH6I2WYr2-e5ejsLX2Di651Bhoo",
  authDomain: "multimart-market.firebaseapp.com",
  projectId: "multimart-market",
  storageBucket: "multimart-market.appspot.com",
  messagingSenderId: "333605612656",
  appId: "1:333605612656:web:d04c6d41fd038b765d98b5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;