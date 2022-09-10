// Import the functions you need from the SDKs you need
import { initializeApp, getApp,getApps } from "firebase/app";
import {getFirestore} from "firebase/firestore"
import {getStorage} from "firebase/storage"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC4PlZINmUwvsVK6PwI2A26ye4Wg001cvo",
    authDomain: "instagram2-e103a.firebaseapp.com",
    projectId: "instagram2-e103a",
    storageBucket: "instagram2-e103a.appspot.com",
    messagingSenderId: "698319537461",
    appId: "1:698319537461:web:bc9b3ab5f75b0b69f4f87c"
  };
  

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export {app, db, storage};