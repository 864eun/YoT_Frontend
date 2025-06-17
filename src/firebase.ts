import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyAbdw6207mtIwgzGF2xCmCBhmk-Rrcmc4Q',
  authDomain: 'yot-frontend.firebaseapp.com',
  projectId: 'yot-frontend',
  storageBucket: 'yot-frontend.firebasestorage.app',
  messagingSenderId: '906783138634',
  appId: '1:906783138634:web:6067e589dd2a9eaae5d7b3',
  measurementId: 'G-DPYK3TKQBY',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
