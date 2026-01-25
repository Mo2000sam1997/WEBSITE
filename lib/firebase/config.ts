import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyBhIrFvyJXWhofGZYmhSFg8LDh6YjHMbDs",
  authDomain: "labobox2-f3165.firebaseapp.com",
  projectId: "labobox2-f3165",
  storageBucket: "labobox2-f3165.firebasestorage.app",
  messagingSenderId: "360533802330",
  appId: "1:360533802330:web:1569a33afc5dc892368763",
  measurementId: "G-HCWLLQPDE4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize services
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;
