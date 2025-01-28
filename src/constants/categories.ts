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
    'Screen 4',
    'Screen 5',
    'Screen 6'
  ] as const;
  export const TermsAndConditionss= "1. Overview We value your privacy and are committed to protecting your personal information. This Privacy Policy outlines how we collect, use, and safeguard your information. 2. Information Collection We collect personal information such as your name, phone number, seat number, and screen details to facilitate your order and ensure smooth transactions. 3. Use of Information Your personal information is used solely for processing transactions, improving user experience, and providing order confirmations. It is not shared with unauthorized third parties. 4. Data Protection To protect your personal information, we implement industry best practices and precautions to ensure it is not lost, misused, accessed, disclosed, altered, or destroyed. 5. Third-Party Payment Processors Payments are processed through secure third-party gateways like Phonepe. These gateways adhere to PCI-DSS standards to ensure secure handling of payment information. 6. Retention of Information Personal information collected is retained only as long as necessary to complete transactions and comply with legal requirements. 7. Changes to the Privacy Policy We reserve the right to modify this Privacy Policy at any time. Changes will be posted on this page and take effect immediately. If material changes are made, you will be notified here. 8. Contact Us For questions or concerns about this Privacy Policy, contact: Phone: 9346917375 Email: harigepl@gmail.com Address: Raj Yuvraj (G3 THEATRES), Andhra Ratna Road, Gandhi Nagar, Vijayawada, Andhra Pradesh, 520010, India 9. Privacy and Protection of Information To protect your personal information, we implement reasonable precautions and industry best practices to ensure it is not inappropriately lost, misused, accessed, disclosed, altered, or destroyed. All personal and payment information provided during the ordering process is handled securely and used solely for completing transactions and improving the user experience. As a third party, we act as custodians of this data for website functionality and account handling purposes." as const;
  export const PrivacyAndPolicy= "1. Overview We value your privacy and are committed to protecting your personal information. This Privacy Policy outlines how we collect, use, and safeguard your information. 2. Information Collection We collect personal information such as your name, phone number, seat number, and screen details to facilitate your order and ensure smooth transactions. 3. Use of Information Your personal information is used solely for processing transactions, improving user experience, and providing order confirmations. It is not shared with unauthorized third parties. 4. Data Protection To protect your personal information, we implement industry best practices and precautions to ensure it is not lost, misused, accessed, disclosed, altered, or destroyed. 5. Third-Party Payment Processors Payments are processed through secure third-party gateways like Phonepe. These gateways adhere to PCI-DSS standards to ensure secure handling of payment information. 6. Retention of Information Personal information collected is retained only as long as necessary to complete transactions and comply with legal requirements. 7. Changes to the Privacy Policy We reserve the right to modify this Privacy Policy at any time. Changes will be posted on this page and take effect immediately. If material changes are made, you will be notified here. 8. Contact Us For questions or concerns about this Privacy Policy, contact: Phone: 9346917375 Email: harigepl@gmail.com Address: Raj Yuvraj (G3 THEATRES), Andhra Ratna Road, Gandhi Nagar, Vijayawada, Andhra Pradesh, 520010, India 9. Privacy and Protection of Information To protect your personal information, we implement reasonable precautions and industry best practices to ensure it is not inappropriately lost, misused, accessed, disclosed, altered, or destroyed. All personal and payment information provided during the ordering process is handled securely and used solely for completing transactions and improving the user experience. As a third party, we act as custodians of this data for website functionality and account handling purposes." as const;
  export const ThreaterName="avula";
  export default ThreaterName;