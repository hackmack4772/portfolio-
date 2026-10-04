import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore/lite";

const firebaseConfig = {
  apiKey: "AIzaSyBtm9WpPn-WT0IFVKOW6Xs-dcX474oW16o",
  authDomain: "hackmack4772.firebaseapp.com",
  projectId: "hackmack4772",
  storageBucket: "hackmack4772.firebasestorage.app",
  messagingSenderId: "38931846023",
  appId: "1:38931846023:web:2ed96aa0b1912c0fa6b922",
};

// Only Firestore is initialised here. This module is on the public site's
// critical path, and importing firebase/auth just to export an `auth` that
// nothing outside /admin uses pulled the whole auth SDK into the eager chunk.
// The admin entry point creates its own auth instance from the same app.
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export { app, db, addDoc, collection };
