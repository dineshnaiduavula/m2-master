// import { doc, getDoc } from 'firebase/firestore';
// import { db } from '../lib/firebase';
// const docRef = doc(db, 'FOOD_CATEGORIES', 'JpE41LCjmpplMLQR0jKc');
// const docalldata = await getDoc(docRef);
// const docdata = docalldata.data();
// const dArray = docdata.foodcategories;

import { collection, getDocs } from 'firebase/firestore';
import { db } from '../lib/firebase';
const collectionRef = collection(db, 'FOOD_CATEGORIES'); // Reference to the collection
const querySnapshot = await getDocs(collectionRef); // Get all documents in the collection
  const firstDoc = querySnapshot.docs[0]; // Get the first document
  const firstDocData = firstDoc.data(); // Get the data of the first document
  const dArray = firstDocData.foodcategories;

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
    'Screen 4'
  ] as const;