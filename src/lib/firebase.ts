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
const firebaseConfig2 = { apiKey: "AIzaSyCWqOups0GclVQRTpvwyt19r0xAmy4czBA",
  authDomain: "theater2-3457b.firebaseapp.com",
  projectId: "theater2-3457b",
  storageBucket: "theater2-3457b.firebasestorage.app",
  messagingSenderId: "550437117220",
  appId: "1:550437117220:web:4595794e51ce3fc1c627b1",
  measurementId: "G-4705PFWS71"};
  const firebaseConfig3 = {  apiKey: "AIzaSyAsz7qS0aJrR86T17olAoU3-30Gf8qRRBw",
    authDomain: "theater3-c2475.firebaseapp.com",
    projectId: "theater3-c2475",
    storageBucket: "theater3-c2475.firebasestorage.app",
    messagingSenderId: "391973087813",
    appId: "1:391973087813:web:81e833893abb135cc2512c",
    measurementId: "G-3Q3FVEYNP9"}
  const firebaseConfig4 = { apiKey: "AIzaSyDF89O-WoBiPguFqxqKdlaewwkr_h4PMWY",
    authDomain: "theater4-f2159.firebaseapp.com",
    projectId: "theater4-f2159",
    storageBucket: "theater4-f2159.firebasestorage.app",
    messagingSenderId: "597267513103",
    appId: "1:597267513103:web:73a29d46f94cd23fb3087a",
    measurementId: "G-6YSSL4YCE7"}
  const firebaseConfig5 = { apiKey: "AIzaSyAXEX0tT0CYe0kgQziSSteJpZPAVhV0BAk",
    authDomain: "theater5.firebaseapp.com",
    projectId: "theater5",
    storageBucket: "theater5.firebasestorage.app",
    messagingSenderId: "899753870655",
    appId: "1:899753870655:web:68b9c9dc4661dc54777f8a",
    measurementId: "G-T55KXMBVGC"}
  const firebaseConfig6 = { apiKey: "AIzaSyBAZEFfzlq8bH29Q0A_hWi2ZE0QRzoY9t8",
    authDomain: "theater6-69a6e.firebaseapp.com",
    projectId: "theater6-69a6e",
    storageBucket: "theater6-69a6e.firebasestorage.app",
    messagingSenderId: "818146249469",
    appId: "1:818146249469:web:a2e0cbeac8375b77468c94",
    measurementId: "G-N4JQ63KX9G"}
  const firebaseConfig7 = {apiKey: "AIzaSyAge1Ol-WIJiuYis0X4_STIHr1unAOMs88",
    authDomain: "theater7-4d8f9.firebaseapp.com",
    projectId: "theater7-4d8f9",
    storageBucket: "theater7-4d8f9.firebasestorage.app",
    messagingSenderId: "283274781403",
    appId: "1:283274781403:web:dd6bcea04aa8f19961e2fe",
    measurementId: "G-K0RSGZGNFX"}
  const firebaseConfig8 = {apiKey: "AIzaSyCxmwdbIeijJLWbeJ7fCWt84riV_A0fGIc",
    authDomain: "theater8-9ea77.firebaseapp.com",
    projectId: "theater8-9ea77",
    storageBucket: "theater8-9ea77.firebasestorage.app",
    messagingSenderId: "559576146451",
    appId: "1:559576146451:web:eedd73992ff753cf8e15e6",
    measurementId: "G-4P9KT174Q4"}
  const firebaseConfig9 = { apiKey: "AIzaSyCGdF0OU7O4bsTaoN2SpJTZfeTX9GqXQaQ",
    authDomain: "theater9-163e7.firebaseapp.com",
    projectId: "theater9-163e7",
    storageBucket: "theater9-163e7.firebasestorage.app",
    messagingSenderId: "694518582098",
    appId: "1:694518582098:web:95257490e204f008e4888b",
    measurementId: "G-8KQXH6MF94"}
  const firebaseConfig10 = {apiKey: "AIzaSyC6oBdynRuw9AF5NHYswjmMTN4pMseenB8",
    authDomain: "theater10-35a37.firebaseapp.com",
    projectId: "theater10-35a37",
    storageBucket: "theater10-35a37.firebasestorage.app",
    messagingSenderId: "365281280230",
    appId: "1:365281280230:web:35e3c70e880cf3cc537b27",
    measurementId: "G-C0CMMQWVCM"}
  const firebaseConfig11 = {apiKey: "AIzaSyB0Bw1LckAR-CNPk5PG3XZNpSUiPv97oao",
    authDomain: "theater11-ef526.firebaseapp.com",
    projectId: "theater11-ef526",
    storageBucket: "theater11-ef526.firebasestorage.app",
    messagingSenderId: "431103219990",
    appId: "1:431103219990:web:073c2b53e0d5a8efc65837",
    measurementId: "G-NNED807MPJ"}
  const firebaseConfig12 = { apiKey: "AIzaSyAESYD-rvo-RU_b3M6SnG5O9pl7pl0yP7M",
    authDomain: "theater12-60c99.firebaseapp.com",
    projectId: "theater12-60c99",
    storageBucket: "theater12-60c99.firebasestorage.app",
    messagingSenderId: "532546286771",
    appId: "1:532546286771:web:97d3db48a37be37d5d6cc6",
    measurementId: "G-3JYW6KFHSF"}
  const firebaseConfig13 = {apiKey: "AIzaSyAFkSMcnS-nZOKDhJY3q4_6dt7PgPLxrww",
    authDomain: "theater13-1476d.firebaseapp.com",
    projectId: "theater13-1476d",
    storageBucket: "theater13-1476d.firebasestorage.app",
    messagingSenderId: "923523944434",
    appId: "1:923523944434:web:4b0d56395e2d2a6a8ee56b",
    measurementId: "G-7F924D1TMJ"}
  const firebaseConfig14 = { apiKey: "AIzaSyChBSUWv47KMCzhB82slxcpeEAA0-pVJ60",
    authDomain: "theater14-5e2ff.firebaseapp.com",
    projectId: "theater14-5e2ff",
    storageBucket: "theater14-5e2ff.firebasestorage.app",
    messagingSenderId: "170709779990",
    appId: "1:170709779990:web:705b44ecfcea7be099d737",
    measurementId: "G-L1QL9L212Z"}
  const firebaseConfig15 = { apiKey: "AIzaSyC-H5VSSVYKB_DrZwMaenG_9zbjoyE0df0",
    authDomain: "theater15-7aaac.firebaseapp.com",
    projectId: "theater15-7aaac",
    storageBucket: "theater15-7aaac.firebasestorage.app",
    messagingSenderId: "135368166943",
    appId: "1:135368166943:web:b06d5effe119233dabcf2a",
    measurementId: "G-FCYZ7MYN8R"}
  const firebaseConfig16 = { apiKey: "AIzaSyAh6J2TEQRQSQa6Gjwtb4ldaELJj10fKx8",
    authDomain: "theater16-73b5e.firebaseapp.com",
    projectId: "theater16-73b5e",
    storageBucket: "theater16-73b5e.firebasestorage.app",
    messagingSenderId: "1075680897130",
    appId: "1:1075680897130:web:f6eed540a58f9d4f720213",
    measurementId: "G-XCPVLG5J38"}

    const common={   apiKey: "AIzaSyBUbbUFSH7P19jo3t9k3ZJHTJIpzaRoyq8",
      authDomain: "t1234-5baa6.firebaseapp.com",
      projectId: "t1234-5baa6",
      storageBucket: "t1234-5baa6.firebaseapp.com",
      messagingSenderId: "451956179520",
      appId: "1:451956179520:web:28cf759982c314692b55a5",
      measurementId: "G-VMHSW0QGMV",}
// Helper function to get Firebase config
export const getFirebaseConfig = () => {
  const searchParams = new URLSearchParams(window.location.search);
  const theater = searchParams.get('');
  const theater1=searchParams.get('theater')
  if (["0tf1", "1tf1", "2tf1","3tf1", "4tf1", "5tf1","6tf1"].includes(theater1)) {
return firebaseConfig1;}
  else if (["0tf2", "1tf2", "2tf2","3tf2", "4tf2", "5tf2","6tf2"].includes(theater1)) {
     return firebaseConfig2;}
  else if (["0tf3", "1tf3", "2tf3","3tf3", "4tf3", "5tf3","6tf3"].includes(theater1)) {
    return firebaseConfig3;}
  else if (["0tf4", "1tf4", "2tf4","3tf4", "4tf4", "5tf4","6tf4"].includes(theater1)) {
       return firebaseConfig4;}
  else if (["0tf5", "1tf5", "2tf5","3tf5", "4tf5", "5tf5","6tf5"].includes(theater1)) {
      return firebaseConfig5;} 
  else if (["0tf6", "1tf6", "2tf6","3tf6", "4tf6", "5tf6","6tf6"].includes(theater1)) {
        return firebaseConfig6;}
  else if (["0tf7", "1tf7", "2tf7","3tf7", "4tf7", "5tf7","6tf7"].includes(theater1)) {
       return firebaseConfig7;} 
  else if (["0tf8", "1tf8", "2tf8","3tf8", "4tf8", "5tf8","6tf8"].includes(theater1)) {
           return firebaseConfig8;}
  else if (["0tf9", "1tf9", "2tf9","3tf9", "4tf9", "5tf9","6tf9"].includes(theater1)) {
           return firebaseConfig9;} 
  else if (["0tf10", "1tf10", "2tf10","3tf10", "4tf10", "5tf10","6tf10"].includes(theater1)) {
             return firebaseConfig10;}
  else if (["0tf11", "1tf11", "2tf11","3tf11", "4tf11", "5tf11","6tf11"].includes(theater1)) {
              return firebaseConfig11;}
  else if (["0tf12", "1tf12", "2tf12","3tf12", "4tf12", "5tf12","6tf12"].includes(theater1)) {
            return firebaseConfig12;}
  else if (["0tf13", "1tf13", "2tf13","3tf13", "4tf13", "5tf13","6tf13"].includes(theater1)) {
              return firebaseConfig13;}
  else if (["0tf14", "1tf14", "2tf14","3tf14", "4tf14", "5tf14","6tf14"].includes(theater1)) {
               return firebaseConfig14;}
  else if (["0tf15", "1tf15", "2tf15","3tf15", "4tf15", "5tf15","6tf15"].includes(theater1)) {
              return firebaseConfig15;} 
  else if (["0tf16", "1tf16", "2tf16","3tf16", "4tf16", "5tf16","6tf16"].includes(theater1)) {
                   return firebaseConfig16;}


  if (["0tf1", "1tf1", "2tf1","3tf1", "4tf1", "5tf1","6tf1"].includes(theater)) {
                     return firebaseConfig1;}
  else if (["0tf2", "1tf2", "2tf2","3tf2", "4tf2", "5tf2","6tf2"].includes(theater)) {
                  return firebaseConfig2;}
  else if (["0tf3", "1tf3", "2tf3","3tf3", "4tf3", "5tf3","6tf3"].includes(theater)) {
                    return firebaseConfig3;}
  else if (["0tf4", "1tf4", "2tf4","3tf4", "4tf4", "5tf4","6tf4"].includes(theater)) {
                     return firebaseConfig4;}
  else if (["0tf5", "1tf5", "2tf5","3tf5", "4tf5", "5tf5","6tf5"].includes(theater)) {
                      return firebaseConfig5;} 
  else if (["0tf6", "1tf6", "2tf6","3tf6", "4tf6", "5tf6","6tf6"].includes(theater)) {
                        return firebaseConfig6;}
  else if (["0tf7", "1tf7", "2tf7","3tf7", "4tf7", "5tf7","6tf7"].includes(theater)) {
                         return firebaseConfig7;} 
  else if (["0tf8", "1tf8", "2tf8","3tf8", "4tf8", "5tf8","6tf8"].includes(theater)) {
                          return firebaseConfig8;}
  else if (["0tf9", "1tf9", "2tf9","3tf9", "4tf9", "5tf9","6tf9"].includes(theater)) {
                          return firebaseConfig9;} 
  else if (["0tf10", "1tf10", "2tf10","3tf10", "4tf10", "5tf10","6tf10"].includes(theater)) {
                            return firebaseConfig10;}
  else if (["0tf11", "1tf11", "2tf11","3tf11", "4tf11", "5tf11","6tf11"].includes(theater)) {
                              return firebaseConfig11;}
  else if (["0tf12", "1tf12", "2tf12","3tf12", "4tf12", "5tf12","6tf12"].includes(theater)) {
                             return firebaseConfig12;}
  else if (["0tf13", "1tf13", "2tf13","3tf13", "4tf13", "5tf13","6tf13"].includes(theater)) {
                              return firebaseConfig13;}
  else if (["0tf14", "1tf14", "2tf14","3tf14", "4tf14", "5tf14","6tf14"].includes(theater)) {
                             return firebaseConfig14;}
  else if (["0tf15", "1tf15", "2tf15","3tf15", "4tf15", "5tf15","6tf15"].includes(theater)) {
                              return firebaseConfig15;} 
  else if (["0tf16", "1tf16", "2tf16","3tf16", "4tf16", "5tf16","6tf16"].includes(theater)) {
                                  return firebaseConfig16;}
  else {return common;}
};

// Initialize Firebase
const app = initializeApp(getFirebaseConfig());
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
