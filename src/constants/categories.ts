import { collection, getDocs } from 'firebase/firestore';
import { db } from '../lib/firebase';
const collectionRef = collection(db, 'FOOD_CATEGORIES'); // Reference to the collection
const querySnapshot = await getDocs(collectionRef); // Get all documents in the collection
  const firstDoc = querySnapshot.docs[0]; // Get the first document
  const firstDocData = firstDoc.data(); // Get the data of the first document
  const dArray = firstDocData.foodcategories;
//maindata
const collectionRefMainData = collection(db, 'MainData'); // Reference to the collection
const querySnapshotMainData = await getDocs(collectionRefMainData); // Get all documents in the collection
  const firstDocMainData = querySnapshotMainData.docs[0]; // Get the first document
  const firstDocDataMainData = firstDocMainData.data(); // Get the data of the first document

export const FOOD_CATEGORIES =dArray as const
// ['Snacks',
//     'Beverages',
//     'Popcorn',
//     'Ice Cream',
//     'Fast Food'
//   ] as const;
  
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