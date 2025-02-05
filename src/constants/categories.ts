import { collection, getDocs } from 'firebase/firestore';
import { db } from '../lib/firebase';
const collectionRef = collection(db, 'FOOD_CATEGORIES');
const querySnapshot = await getDocs(collectionRef); 
  const firstDoc = querySnapshot.docs[0];
  const firstDocData = firstDoc.data(); 
  const dArray = firstDocData.foodcategories;
const collectionRefMainData = collection(db, 'MainData'); 
const querySnapshotMainData = await getDocs(collectionRefMainData); 
  const firstDocMainData = querySnapshotMainData.docs[0]; 
  const firstDocDataMainData = firstDocMainData.data(); 

export const FOOD_CATEGORIES =dArray as const
  export const SCREENS = [
    'Screen 1',
    'Screen 2',
    'Screen 3',
    'Screen 4',
    'Screen 5',
    'Screen 6'
  ] as const;
  export const TermsAndConditionss= firstDocDataMainData.TermsAndConditionss;
  export const PrivacyAndPolicy=firstDocDataMainData.PrivacyAndPolicy;
  export const ThreaterName=firstDocDataMainData.ThreaterName
  export const Gstt=firstDocDataMainData.Gstt;
  export default ThreaterName;