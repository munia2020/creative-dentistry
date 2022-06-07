// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC0qXR97rCT3xfMDmgnC4ngRrhCKAcl1W8",
  authDomain: "creative-dentistry.firebaseapp.com",
  projectId: "creative-dentistry",
  storageBucket: "creative-dentistry.appspot.com",
  messagingSenderId: "406572446784",
  appId: "1:406572446784:web:d4fba2501db60970979ba5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);


export default auth;

