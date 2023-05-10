// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBRI3T5_3Ib4IyVer0dBWI420Fmag1Jl4E",
  authDomain: "react-native-course-f3f0a.firebaseapp.com",
  databaseURL:
    "https://react-native-course-f3f0a-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "react-native-course-f3f0a",
  storageBucket: "react-native-course-f3f0a.appspot.com",
  messagingSenderId: "603799925430",
  appId: "1:603799925430:web:854f57d0556348792fec17",
  measurementId: "G-NZVRDS86J6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
