// Import the functions you need from the SDKs you need

import { initializeApp } from 'firebase/app';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: 'AIzaSyAfM1GJN9BbkzDL0jpe0-Xam968z9wRZcY',
  authDomain: 'react-chat-d38af.firebaseapp.com',
  projectId: 'react-chat-d38af',
  storageBucket: 'react-chat-d38af.appspot.com',
  messagingSenderId: '769101038349',
  appId: 'G-B7ZLG7Q73D',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
