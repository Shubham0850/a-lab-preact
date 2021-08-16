import app from "firebase/app";
import "firebase/firestore";
const firebaseApp = app.initializeApp({
  apiKey: "AIzaSyD_aCVZntLVzmFNI7sp1ekLvSKiHu0cfP4",
  authDomain: "alabdevs123.firebaseapp.com",
  projectId: "alabdevs123",
  storageBucket: "alabdevs123.appspot.com",
  messagingSenderId: "1003337097216",
  appId: "1:1003337097216:web:4ea531d3d98ffdd5e5b8e5",
  measurementId: "G-N1GV8XLBWY",
});

const db = firebaseApp.firestore();

export default db;
