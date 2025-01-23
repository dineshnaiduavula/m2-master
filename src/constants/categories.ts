import { doc, getDoc } from 'firebase/firestore';
import { db } from '../lib/firebase';
const docRef = doc(db, 'FOOD_CATEGORIES', 'JpE41LCjmpplMLQR0jKc');
const docalldata = await getDoc(docRef);
const docdata = docalldata.data();
const dArray = docdata.d;

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