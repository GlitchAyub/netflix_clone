import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA49v_-5Hw-FBT7NqA7YAfDNOo0IyYNpi0",
  authDomain: "react-netflix-clone-e6c0f.firebaseapp.com",
  projectId: "react-netflix-clone-e6c0f",
  storageBucket: "react-netflix-clone-e6c0f.appspot.com",
  messagingSenderId: "12510249501",
  appId: "1:12510249501:web:6b8c65ebf7f974c2c03cf4",
  measurementId: "G-H40RRJ0N67"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app)
