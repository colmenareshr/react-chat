// Import the functions you need from the SDKs you need

import { initializeApp } from 'firebase/app';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional


  const firebaseConfig = {
    apiKey: import.meta.env.PROD.VITE_API_KEY,
    authDomain: import.meta.env.PROD.VITE_AUTH_DOMAIN,
    projectId: import.meta.env.PROD.VITE_PROJECT_ID,
    storageBucket: import.meta.env.PROD.VITE_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.PROD.VITE_MESSSAGING_SENDER_ID,
    appId: import.meta.env.PROD.VITE_APP_ID,
  };


// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
