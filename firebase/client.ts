// import { initializeApp,getApp,getApps } from "firebase/app";
// import { getAuth } from "firebase-admin/auth";
// import { getFirestore } from "firebase-admin/firestore";
// import { getAnalytics } from "firebase/analytics";


// const firebaseConfig = {
//   apiKey: "AIzaSyA5U09ixOdgjXKiN7fyfqmlBtmu1gisThk",
//   authDomain: "quickprep-e7ca4.firebaseapp.com",
//   projectId: "quickprep-e7ca4",
//   storageBucket: "quickprep-e7ca4.firebasestorage.app",
//   messagingSenderId: "278622635819",
//   appId: "1:278622635819:web:dbf674cef602ae0041276e",
//   measurementId: "G-T9WMF7W2JK"
// };

// // Initialize Firebase
// const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

// export const auth = getAuth(app)
// export const db = getFirestore(app)



import { initializeApp,getApp,getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBaDhq1zOJ3Vd5Imj2pffrwokW1LZWQdNY",
  authDomain: "quickprep-3bb10.firebaseapp.com",
  projectId: "quickprep-3bb10",
  storageBucket: "quickprep-3bb10.firebasestorage.app",
  messagingSenderId: "877487115001",
  appId: "1:877487115001:web:8a509557a0229e23d73028",
  measurementId: "G-B17GNDNBME"
};

const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();
export const auth = getAuth(app)
export const db = getFirestore(app)