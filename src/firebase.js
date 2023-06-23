// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCFQKdM-iPCgJsdRBqWYie8OHn5-g_Gp4M",
  authDomain: "prueba-login-23.firebaseapp.com",
  projectId: "prueba-login-23",
  storageBucket: "prueba-login-23.appspot.com",
  messagingSenderId: "994484208812",
  appId: "1:994484208812:web:640b4998b0283424f44b09"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)