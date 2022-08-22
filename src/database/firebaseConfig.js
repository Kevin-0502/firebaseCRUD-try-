import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyAo0KSPzzBDhRif5rzw94kvd8XG7H3Myqs",
  authDomain: "desafio-dos.firebaseapp.com",
  databaseURL: "https://desafio-dos-default-rtdb.firebaseio.com",
  projectId: "desafio-dos",
  storageBucket: "desafio-dos.appspot.com",
  messagingSenderId: "829284195501",
  appId: "1:829284195501:web:825118b66145df3324ba24"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);