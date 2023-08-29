
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "@firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyAfEpg8_AxbYgG-fXNsma7bFEnXG_Lvu0A",
  authDomain: "chatroom-cd278.firebaseapp.com",
  projectId: "chatroom-cd278",
  storageBucket: "chatroom-cd278.appspot.com",
  messagingSenderId: "401201649127",
  appId: "1:401201649127:web:a8256ac3c9f38550b31942"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider(); 