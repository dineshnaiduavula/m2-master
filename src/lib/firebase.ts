import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
import React from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

const firebaseConfigOne = {
  apiKey: "AIzaSyBUbbUFSH7P19jo3t9k3ZJHTJIpzaRoyq8",
  authDomain: "t1234-5baa6.firebaseapp.com",
  projectId: "t1234-5baa6",
  storageBucket: "t1234-5baa6.firebasestorage.app",
  messagingSenderId: "451956179520",
  appId: "1:451956179520:web:28cf759982c314692b55a5",
  measurementId: "G-VMHSW0QGMV"
};

const firebaseConfigTwo = {
  apiKey: "AIzaSyBUbbUFSH7P19jo3t9k3ZJHTJIpzaRoyq8",
  authDomain: "t1234-5baa6.firebaseapp.com",
  projectId: "t1234-5baa6",
  storageBucket: "t1234-5baa6.firebasestorage.app",
  messagingSenderId: "451956179520",
  appId: "1:451956179520:web:28cf759982c314692b55a5",
  measurementId: "G-VMHSW0QGMV"
};


// Determine which configuration to use
const searchParams = new URLSearchParams(window.location.search);
const theater = searchParams.get('');
let firebaseConfig
if(theater=='one'){ firebaseConfig=firebaseConfigOne}
else if(theater=='two'){ firebaseConfig=firebaseConfigTwo}
else if(theater=='three'){firebaseConfig=firebaseConfigTwo}
else{
  //navigate("/error");
  console.log("more than 3333")
  firebaseConfig=firebaseConfigOne
  //need to write code
   
}
// const firebaseConfig = theater === 'two' ? firebaseConfigTwo : firebaseConfigOne;
// // eslint-disable-next-line no-constant-condition
// if(1>=0){console.log(theater)}
// else{console.log('two')}
// // Initialize Firebase

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
