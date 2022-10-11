// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAddmA2lRzGbROpD7LM5axl20T4StKQmwo",
  authDomain: "traprenovatie-70620.firebaseapp.com",
  projectId: "traprenovatie-70620",
  storageBucket: "traprenovatie-70620.appspot.com",
  messagingSenderId: "304569423686",
  appId: "1:304569423686:web:21e7f184cd37b74049f747",
  measurementId: "G-BJGTWDNT4R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);