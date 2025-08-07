// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"; 
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBgUfRv2hrQbrD3H75rE5e_MIvcHib_Yr8",
  authDomain: "timbertales-22d46.firebaseapp.com",
  projectId: "timbertales-22d46",
  storageBucket: "timbertales-22d46.appspot.com",
  messagingSenderId: "228955485562",
  appId: "1:228955485562:web:2703334dab59e0af7f52c3",
  measurementId: "G-7TT6GS1LQK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db=getFirestore(app);
const auth=getAuth(app);
const storage=getStorage(app);
export {app, analytics,db,auth,storage}