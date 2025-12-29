import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBXmpVMChNOPI-h_-9SzopBT6rnA5bMxuc",
  authDomain: "property-listing-dd014.firebaseapp.com",
  projectId: "property-listing-dd014",
  storageBucket: "property-listing-dd014.appspot.com",
  messagingSenderId: "897938048550",
  appId: "1:897938048550:web:b2f76b0f85d42fc49288e7",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
