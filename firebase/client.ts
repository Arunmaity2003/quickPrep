import { initializeApp,getApp,getApps } from "firebase/app";
import { getAuth } from "firebase-admin/auth";
import { getFirestore } from "firebase-admin/firestore";
import { getAnalytics } from "firebase/analytics";


const firebaseConfig = {
  apiKey: "AIzaSyA5U09ixOdgjXKiN7fyfqmlBtmu1gisThk",
  authDomain: "quickprep-e7ca4.firebaseapp.com",
  projectId: "quickprep-e7ca4",
  storageBucket: "quickprep-e7ca4.firebasestorage.app",
  messagingSenderId: "278622635819",
  appId: "1:278622635819:web:dbf674cef602ae0041276e",
  measurementId: "G-T9WMF7W2JK"
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app)
export const db = getFirestore(app)
