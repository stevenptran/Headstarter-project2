// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyByjsb1KDbcGhwBHXPX_xxYeoqBW8cU2JU",
  authDomain: "inventory-management-859df.firebaseapp.com",
  projectId: "inventory-management-859df",
  storageBucket: "inventory-management-859df.appspot.com",
  messagingSenderId: "1059460188578",
  appId: "1:1059460188578:web:712daf3d36a43146578afb",
  measurementId: "G-2B1BSED5VQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app)

export {firestore}