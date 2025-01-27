// import { initializeApp } from 'firebase/app';
// import { getAuth } from 'firebase/auth';
// import { getFirestore } from 'firebase/firestore';
// import { getStorage } from 'firebase/storage';
// import React from "react";
// import { useNavigate, useSearchParams } from "react-router-dom";

// const firebaseConfigOne = {
//   apiKey: "AIzaSyBUbbUFSH7P19jo3t9k3ZJHTJIpzaRoyq8",
//   authDomain: "t1234-5baa6.firebaseapp.com",
//   projectId: "t1234-5baa6",
//   storageBucket: "t1234-5baa6.firebasestorage.app",
//   messagingSenderId: "451956179520",
//   appId: "1:451956179520:web:28cf759982c314692b55a5",
//   measurementId: "G-VMHSW0QGMV"
// };

// const firebaseConfigTwo = {
//   apiKey: "AIzaSyBUbbUFSH7P19jo3t9k3ZJHTJIpzaRoyq8",
//   authDomain: "t1234-5baa6.firebaseapp.com",
//   projectId: "t1234-5baa6",
//   storageBucket: "t1234-5baa6.firebasestorage.app",
//   messagingSenderId: "451956179520",
//   appId: "1:451956179520:web:28cf759982c314692b55a5",
//   measurementId: "G-VMHSW0QGMV"
// };
// const getFirebaseConfig = () => {
//   const searchParams = new URLSearchParams(window.location.search);
//   const theater = searchParams.get('theater'); // Updated to retrieve the correct query parameter

//   if (theater === '0tf1') {
//     console.log('0tf1');
//     return firebaseConfigOne;
//   } else if (theater === '0tf2') {
//     console.log('0tf2');
//     return firebaseConfigTwo;
//   } else if (theater === '0tf3') {
//     console.log('0tf3');
//     return firebaseConfigTwo;
//   } else {
//     console.log("more than 3333");
//     return firebaseConfigOne;
//   }
// };

// const app = initializeApp(getFirebaseConfig());
// export const auth = getAuth(app);
// export const db = getFirestore(app);
// export const storage = getStorage(app);
// firebase.ts
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Firebase configurations
const firebaseConfigOne = {
  apiKey: "AIzaSyBUbbUFSH7P19jo3t9k3ZJHTJIpzaRoyq8",
  authDomain: "t1234-5baa6.firebaseapp.com",
  projectId: "t1234-5baa6",
  storageBucket: "t1234-5baa6.firebaseapp.com",
  messagingSenderId: "451956179520",
  appId: "1:451956179520:web:28cf759982c314692b55a5",
  measurementId: "G-VMHSW0QGMV",
};

const firebaseConfigTwo = {
  apiKey: "AIzaSyBUbbUFSH7P19jo3t9k3ZJHTJIpzaRoyq8",
  authDomain: "t1234-5baa6.firebaseapp.com",
  projectId: "t1234-5baa6",
  storageBucket: "t1234-5baa6.firebaseapp.com",
  messagingSenderId: "451956179520",
  appId: "1:451956179520:web:28cf759982c314692b55a5",
  measurementId: "G-VMHSW0QGMV",
};

// Helper function to get Firebase config
export const getFirebaseConfig = () => {
  const searchParams = new URLSearchParams(window.location.search);
  //const theater = searchParams.get("theater");
  const theater = searchParams.get('');
  const theater1=searchParams.get('theater')
  if (["0tf1", "1tf1", "2tf1","3tf1", "4tf1", "5tf1","6tf1"].includes(theater1)) {
    console.log("0tf1");
    return firebaseConfigOne;
  }else if (["0tf2", "1tf2", "2tf2","3tf2", "4tf2", "5tf2","6tf2"].includes(theater1)) {
    console.log("0tf2");
    return firebaseConfigTwo;
  } else if (["0tf3", "1tf3", "2tf3","3tf3", "4tf3", "5tf3","6tf3"].includes(theater1)) {
    console.log("0tf3");
    return firebaseConfigTwo;
  }
  if (["0tf1", "1tf1", "2tf1","3tf1", "4tf1", "5tf1","6tf1"].includes(theater)) {
    console.log("0tf1");
    return firebaseConfigOne;
  }else if (["0tf2", "1tf2", "2tf2","3tf2", "4tf2", "5tf2","6tf2"].includes(theater)) {
    console.log("0tf2");
    return firebaseConfigTwo;
  } else if (["0tf3", "1tf3", "2tf3","3tf3", "4tf3", "5tf3","6tf3"].includes(theater)) {
    console.log("0tf3");
    return firebaseConfigTwo;}
  else {
    console.log("more than 3333");
    console.log(theater)
    return firebaseConfigOne;
  }
};

// Initialize Firebase
const app = initializeApp(getFirebaseConfig());
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
