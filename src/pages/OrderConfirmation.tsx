// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import { CheckCircle, Home } from 'lucide-react';

// function OrderConfirmation() {
//   const navigate = useNavigate();

//   return (
//     <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
//       <div className="max-w-md w-full bg-white rounded-lg shadow-xl p-8 text-center">
//         <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-6" />
//         <h2 className="text-2xl font-bold text-gray-900 mb-4">Order Confirmed!</h2>
//         <p className="text-gray-600 mb-8">
//           Your order has been successfully placed. Our staff will deliver your food to your seat shortly.
//         </p>
//         <button
//           onClick={() => navigate('/menu')}
//           className="inline-flex items-center space-x-2 bg-red-600 text-white py-2 px-4 rounded-md hover:bg-red-700 transition-colors duration-300"
//         >
//           <Home className="w-5 h-5" />
//           <span>Return to Menu</span>
//         </button>
//         <br /><br />
//         <div>
//   <p style={{ color: 'gray', fontSize: '0.8rem', textAlign:'center' }}>
//     Contact our food counter if you have issues about payment or order confirmation, we are always happy to assist.
//   </p>
// </div>
//       </div>
//     </div>
//   );
// }

// export default OrderConfirmation;

import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import CryptoJS from 'crypto-js';
import toast from 'react-hot-toast';
import { ArrowLeft } from 'lucide-react';



const OrderConfirmation = () => {
  const [status, setStatus] = useState<'SUCCESS' | 'FAILED' | 'PENDING' | null>(null);
  const navigate = useNavigate();
 const location = useLocation();
    const query = new URLSearchParams(location.search).toString();
  // useEffect(() => {
  //   const fetchPaymentStatus = async () => {
  //     const transactionId = localStorage.getItem('transactionId'); // Retrieve the transactionId from localStorage

  //     if (!transactionId) {
  //       toast.error('Transaction ID not found.');
  //       return;
  //     }

  //     // API endpoint to check the payment status
  //     const salt_key = process.env.REACT_APP_SALT_KEY || 'your_salt_key';
  //     const merchant_id = process.env.REACT_APP_MERCHANT_ID || 'your_merchant_id';

  //     const statusPayload = `/pg/v1/status/${merchant_id}/${transactionId}${salt_key}`;
  //     const hash = CryptoJS.SHA256(statusPayload).toString(CryptoJS.enc.Hex);
  //     const checksum = `${hash}###1`;

  //     const statusURL = `https://api-preprod.phonepe.com/apis/pg-sandbox/pg/v1/status/${merchant_id}/${transactionId}`;

  //     try {
  //       // Make a request to get the payment status
  //       const res = await axios.get(statusURL, {
  //         headers: {
  //           accept: 'application/json',
  //           'X-VERIFY': checksum,
  //           'X-MERCHANT-ID': merchant_id,
  //         },
  //       });

  //       // if (res.data.success && res.data.code === 'PAYMENT_SUCCESS') {
  //         if ( res.data.code === 'PAYMENT_SUCCESS') {
  //         setStatus('SUCCESS');
  //         toast.success('Payment Successful!');
  //       } else {
  //         setStatus('FAILED');
  //         toast.error('Payment Failed!');
  //       }
  //     } catch (error) {
  //       console.error('Error fetching payment status:', error);
  //       setStatus('FAILED');
  //       toast.error('Payment status verification failed.');
  //     }
  //   };

  //   // Fetch payment status when the component mounts
  //   fetchPaymentStatus();
  // }, []);


  useEffect(() => {
    const fetchPaymentStatus = async () => {
      const transactionId = localStorage.getItem('transactionId'); 
      console.log("Transaction ID:", transactionId);
  
      if (!transactionId) {
        toast.error('Transaction ID not found.');
        return;
      }
  
      const salt_key = process.env.REACT_APP_SALT_KEY || 'your_salt_key';
      const merchant_id = process.env.REACT_APP_MERCHANT_ID || 'your_merchant_id';
  
      const statusPayload = `/pg/v1/status/${merchant_id}/${transactionId}${salt_key}`;
      const hash = CryptoJS.SHA256(statusPayload).toString(CryptoJS.enc.Hex);
      const checksum = `${hash}###1`;
      console.log("Checksum:", checksum);
  
      const statusURL = `https://api-preprod.phonepe.com/apis/pg-sandbox/pg/v1/status/${merchant_id}/${transactionId}`;
  
      try {
        const res = await axios.get(statusURL, {
          headers: {
            accept: 'application/json',
            'X-VERIFY': checksum,
            'X-MERCHANT-ID': merchant_id,
          },
        });
  
        console.log("API Response:", res.data);
  
        if (res.data.code === 'PAYMENT_SUCCESS') {
          setStatus('SUCCESS');
          toast.success('Payment Successful!');
        } else {
          setStatus('FAILED');
          toast.error('Payment Failed!');
        }
      } catch (error) {
        console.error('Error fetching payment status:', error);
        setStatus('FAILED');
        toast.error('Payment status verification failed.');
      }
    };
  
    fetchPaymentStatus();
  }, []);
  

  return (
    <div>
    <div>
        <button
          onClick={() => 
            navigate(`/menu${query ? `?${query}` : ''}`)}
          className="flex items-center space-x-2 text-red-600 hover:text-red-700">
          <ArrowLeft className="w-5 h-5" />
          <span>Return to Menu</span></button>
      </div>
    <div className="min-h-screen flex items-center justify-center">
      

      {status === 'SUCCESS' && (
        <h2 className="text-2xl font-bold text-green-600">Payment Successful! 🎉</h2>
      )}
      {status === 'FAILED' && (
        <h2 className="text-2xl font-bold text-red-600">Payment Failed. Please try again.</h2>
      )}
      {status === null && (
        <h2 className="text-2xl font-bold text-gray-600">Verifying Payment...</h2>
      )}
    </div>
    </div>
  );
};

export default OrderConfirmation;
