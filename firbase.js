// Firebase App
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.15.0/firebase-app.js";

// Firestore
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  doc
} from "https://www.gstatic.com/firebasejs/12.15.0/firebase-firestore.js";

// Firebase Config
const firebaseConfig = {
  apiKey: "AIzaSyDeBI_O_PBlA_mIjMRkTbLof3NoYNm_P9M",
  authDomain: "khalil-fedelta-v02.firebaseapp.com",
  projectId: "khalil-fedelta-v02",
  storageBucket: "khalil-fedelta-v02.firebasestorage.app",
  messagingSenderId: "394932488548",
  appId: "1:394932488548:web:4f04de21e89ee099971271",
  measurementId: "G-Y14T9PETEH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Firestore Database
const db = getFirestore(app);

// Export
export {
  db,
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  doc
};
