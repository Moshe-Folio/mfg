import { initializeApp, getApps, getApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyBXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
  authDomain: "mfg-knowledge-base-72ae9.firebaseapp.com",
  projectId: "mfg-knowledge-base-72ae9",
  storageBucket: "mfg-knowledge-base-72ae9.appspot.com",
  messagingSenderId: "103135819933537516437",
  appId: "1:103135819933537516437:web:XXXXXXXXXXXXXXXXXXXXX"
};

// Initialize Firebase
const app = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { app, auth, db, storage };