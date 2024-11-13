// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyArCIOeQavscQOXzGuPu1RKmjv2tjhslCg",
  authDomain: "sisfor1.firebaseapp.com",
  projectId: "sisfor1",
  storageBucket: "sisfor1.firebasestorage.app",
  messagingSenderId: "393008228209",
  appId: "1:393008228209:web:4344f2b16425863f9ab8d0",
  measurementId: "G-0RDKHFQV9R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app); 

export { auth, db, };
