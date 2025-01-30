import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Firebase configurations
const firebaseConfig1 = { apiKey: "AIzaSyDXmWMZ2PClV_DdxIp6Ez6IyTxrWB8bgkk",
  authDomain: "theater1-5dbcd.firebaseapp.com",
  projectId: "theater1-5dbcd",
  storageBucket: "theater1-5dbcd.firebasestorage.app",
  messagingSenderId: "486073242031",
  appId: "1:486073242031:web:eaea62b3d605d9f7155f5a",
  measurementId: "G-KWG5GTM6P2"};
const firebaseConfig2 = {};
  const firebaseConfig3 = {}
  const firebaseConfig4 = {}
  const firebaseConfig5 = {}
  const firebaseConfig6 = {}
  const firebaseConfig7 = {}
  const firebaseConfig8 = {}
  const firebaseConfig9 = {}
  const firebaseConfig10 = {}
  const firebaseConfig11 = {}
  const firebaseConfig12 = {}
  const firebaseConfig13 = {}
  const firebaseConfig14 = {}
  const firebaseConfig15 = {}
  const firebaseConfig16 = {   apiKey: "AIzaSyBUbbUFSH7P19jo3t9k3ZJHTJIpzaRoyq8",
    authDomain: "t1234-5baa6.firebaseapp.com",
    projectId: "t1234-5baa6",
    storageBucket: "t1234-5baa6.firebaseapp.com",
    messagingSenderId: "451956179520",
    appId: "1:451956179520:web:28cf759982c314692b55a5",
    measurementId: "G-VMHSW0QGMV",}

// Helper function to get Firebase config
export const getFirebaseConfig = () => {
  const searchParams = new URLSearchParams(window.location.search);
  //const theater = searchParams.get("theater");
  const theater = searchParams.get('');
  const theater1=searchParams.get('theater')
  if (["0tf1", "1tf1", "2tf1","3tf1", "4tf1", "5tf1","6tf1"].includes(theater1)) {
    console.log("0tf1"); return firebaseConfig1;}
  else if (["0tf2", "1tf2", "2tf2","3tf2", "4tf2", "5tf2","6tf2"].includes(theater1)) {
    console.log("0tf2"); return firebaseConfig2;}
  else if (["0tf3", "1tf3", "2tf3","3tf3", "4tf3", "5tf3","6tf3"].includes(theater1)) {
    console.log("0tf3"); return firebaseConfig3;}
  else if (["0tf4", "1tf4", "2tf4","3tf4", "4tf4", "5tf4","6tf4"].includes(theater1)) {
      console.log("0tf4"); return firebaseConfig4;}
  else if (["0tf5", "1tf5", "2tf5","3tf5", "4tf5", "5tf5","6tf5"].includes(theater1)) {
      console.log("0tf5"); return firebaseConfig5;} 
  else if (["0tf6", "1tf6", "2tf6","3tf6", "4tf6", "5tf6","6tf6"].includes(theater1)) {
        console.log("0tf6"); return firebaseConfig6;}
  else if (["0tf7", "1tf7", "2tf7","3tf7", "4tf7", "5tf7","6tf7"].includes(theater1)) {
        console.log("0tf7"); return firebaseConfig7;} 
  else if (["0tf8", "1tf8", "2tf8","3tf8", "4tf8", "5tf8","6tf8"].includes(theater1)) {
          console.log("0tf8"); return firebaseConfig8;}
  else if (["0tf9", "1tf9", "2tf9","3tf9", "4tf9", "5tf9","6tf9"].includes(theater1)) {
          console.log("0tf9"); return firebaseConfig9;} 
  else if (["0tf10", "1tf10", "2tf10","3tf10", "4tf10", "5tf10","6tf10"].includes(theater1)) {
            console.log("0tf10"); return firebaseConfig10;}
  else if (["0tf11", "1tf11", "2tf11","3tf11", "4tf11", "5tf11","6tf11"].includes(theater1)) {
              console.log("0tf11"); return firebaseConfig11;}
  else if (["0tf12", "1tf12", "2tf12","3tf12", "4tf12", "5tf12","6tf12"].includes(theater1)) {
              console.log("0tf12"); return firebaseConfig12;}
  else if (["0tf13", "1tf13", "2tf13","3tf13", "4tf13", "5tf13","6tf13"].includes(theater1)) {
              console.log("0tf13"); return firebaseConfig13;}
  else if (["0tf14", "1tf14", "2tf14","3tf14", "4tf14", "5tf14","6tf14"].includes(theater1)) {
                console.log("0tf4"); return firebaseConfig14;}
  else if (["0tf15", "1tf15", "2tf15","3tf15", "4tf15", "5tf15","6tf15"].includes(theater1)) {
                console.log("0tf15"); return firebaseConfig15;} 
  else if (["0tf16", "1tf16", "2tf16","3tf16", "4tf16", "5tf16","6tf16"].includes(theater1)) {
                  console.log("0tf16"); return firebaseConfig16;}


  if (["0tf1", "1tf1", "2tf1","3tf1", "4tf1", "5tf1","6tf1"].includes(theater)) {
                    console.log("0tf1"); return firebaseConfig1;}
  else if (["0tf2", "1tf2", "2tf2","3tf2", "4tf2", "5tf2","6tf2"].includes(theater)) {
                    console.log("0tf2"); return firebaseConfig2;}
  else if (["0tf3", "1tf3", "2tf3","3tf3", "4tf3", "5tf3","6tf3"].includes(theater)) {
                    console.log("0tf3"); return firebaseConfig3;}
  else if (["0tf4", "1tf4", "2tf4","3tf4", "4tf4", "5tf4","6tf4"].includes(theater)) {
                      console.log("0tf4"); return firebaseConfig4;}
  else if (["0tf5", "1tf5", "2tf5","3tf5", "4tf5", "5tf5","6tf5"].includes(theater)) {
                      console.log("0tf5"); return firebaseConfig5;} 
  else if (["0tf6", "1tf6", "2tf6","3tf6", "4tf6", "5tf6","6tf6"].includes(theater)) {
                        console.log("0tf6"); return firebaseConfig6;}
  else if (["0tf7", "1tf7", "2tf7","3tf7", "4tf7", "5tf7","6tf7"].includes(theater)) {
                        console.log("0tf7"); return firebaseConfig7;} 
  else if (["0tf8", "1tf8", "2tf8","3tf8", "4tf8", "5tf8","6tf8"].includes(theater)) {
                          console.log("0tf8"); return firebaseConfig8;}
  else if (["0tf9", "1tf9", "2tf9","3tf9", "4tf9", "5tf9","6tf9"].includes(theater)) {
                          console.log("0tf9"); return firebaseConfig9;} 
  else if (["0tf10", "1tf10", "2tf10","3tf10", "4tf10", "5tf10","6tf10"].includes(theater)) {
                            console.log("0tf10"); return firebaseConfig10;}
  else if (["0tf11", "1tf11", "2tf11","3tf11", "4tf11", "5tf11","6tf11"].includes(theater)) {
                              console.log("0tf11"); return firebaseConfig11;}
  else if (["0tf12", "1tf12", "2tf12","3tf12", "4tf12", "5tf12","6tf12"].includes(theater)) {
                              console.log("0tf12"); return firebaseConfig12;}
  else if (["0tf13", "1tf13", "2tf13","3tf13", "4tf13", "5tf13","6tf13"].includes(theater)) {
                              console.log("0tf13"); return firebaseConfig13;}
  else if (["0tf14", "1tf14", "2tf14","3tf14", "4tf14", "5tf14","6tf14"].includes(theater)) {
                                console.log("0tf4"); return firebaseConfig14;}
  else if (["0tf15", "1tf15", "2tf15","3tf15", "4tf15", "5tf15","6tf15"].includes(theater)) {
                                console.log("0tf15"); return firebaseConfig15;} 
  else if (["0tf16", "1tf16", "2tf16","3tf16", "4tf16", "5tf16","6tf16"].includes(theater)) {
                                  console.log("0tf16"); return firebaseConfig16;}
  else {
    console.log("more than 3333");
    console.log(theater)
    return firebaseConfig16;
  }
};

// Initialize Firebase
const app = initializeApp(getFirebaseConfig());
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
