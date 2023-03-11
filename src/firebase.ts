import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from "firebase/firestore";

const FIREBASE_CONFIG = {
  apiKey:"AIzaSyBSY_9FA5iuuxy0zippGVav0jlvD8EL-K8",
  appId: "1:146884584663:web:d0c8fa37fd43038447bc92",
  authDomain: "react-firebase-chat-app-ef23b.firebaseapp.com",
  messagingSenderId: "146884584663",
  projectId: "react-firebase-chat-app-ef23b",
  storageBucket: "react-firebase-chat-app-ef23b.appspot.com",
}

const firebaseApp = initializeApp(FIREBASE_CONFIG)

export const db = getFirestore(firebaseApp);

export const auth = getAuth(firebaseApp)