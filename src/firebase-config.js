import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyBPImq5AI2O8jYAql-UcZVrV9bj8P5rvRA',
  authDomain: 'auth-rondo.firebaseapp.com',
  projectId: 'auth-rondo',
  storageBucket: 'auth-rondo.appspot.com',
  messagingSenderId: '388786558364',
  appId: '1:388786558364:web:48693015b04cf35ce26459',
  measurementId: 'G-SKV1GBN73J',
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
