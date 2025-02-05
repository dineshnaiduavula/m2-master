import React, { useState, useEffect } from "react";
import { collection, query, where, getDocs, doc, setDoc } from "firebase/firestore";
import { db } from "../lib/firebase";
import { exportOrders } from "../utils/exportOrders";
import { format } from "date-fns";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const EditAndExport = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [docId, setDocId] = useState("");

  const [ThreaterName, setTheaterName] = useState("");
  const [TermsAndConditionss, setTerms] = useState("");
  const [PrivacyAndPolicy, setPolicy] = useState("");
  const [Gstt, setGstNumber] = useState("");
  const [Notes, setNotes] = useState("");

  const [orders, setOrders] = useState([]);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [totalAmount, setTotalAmount] = useState(0); 

  const navigate = useNavigate();

  useEffect(() => {
    if (isLoggedIn) {
      fetchData();
    }
  }, [isLoggedIn]);

  useEffect(() => {
    if (isLoggedIn) {
      fetchCompletedOrders();
    }
  }, [startDate, endDate, isLoggedIn]);

  const fetchData = async () => {
    try {
      const collectionRef = collection(db, "MainData");
      const querySnapshot = await getDocs(collectionRef);

      if (!querySnapshot.empty) {
        const firstDoc = querySnapshot.docs[0];
        const data = firstDoc.data();
        setTheaterName(data.ThreaterName || "");
        setTerms(data.TermsAndConditionss || "");
        setPolicy(data.PrivacyAndPolicy || "");
        setGstNumber(data.Gstt || "");
        setNotes(data.Notes || "");
        setDocId(firstDoc.id);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const fetchCompletedOrders = async () => {
    try {
      const startOfRange = new Date(startDate);
      startOfRange.setHours(0, 0, 0, 0);

      const endOfRange = new Date(endDate);
      endOfRange.setHours(23, 59, 59, 999);

      const q = query(
        collection(db, "orders"),
        where("status", "==", "completed"),
        where("createdAt", ">=", startOfRange.toISOString()),
        where("createdAt", "<=", endOfRange.toISOString())
      );
      const querySnapshot = await getDocs(q);
      const fetchedOrders = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setOrders(fetchedOrders);
      const total = fetchedOrders.reduce((acc, order) => acc + order.total, 0);
      setTotalAmount(total); // Set total amount
    } catch (error) {
      toast.error("Failed to fetch completed orders");
    }
  };

  const handleExport = () => {
    if (orders.length === 0) {
      toast.error("No orders to export");
      return;
    }
    try {
      exportOrders(orders, startDate, endDate);
      toast.success("Orders exported successfully");
    } catch (error) {
      toast.error("Failed to export orders");
    }
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (username === "navya@gmail.com" && password === "123456") {
      setIsLoggedIn(true);
    } else {
      setError("Invalid username or password");
    }
  };

  const handleUpdate = async () => {
    const confirmUpdate = window.confirm("Are you sure you want to update the data?");
    if (!confirmUpdate) return;
  
    if (!docId) {
      toast.error("No document found to update.");
      return;
    }
    
    const gstNumber = parseFloat(Gstt); 
    
    if (isNaN(gstNumber)) {
      toast.error("Invalid GST number. Please enter a valid number.");
      return;
    }
    
    try {
      await setDoc(doc(db, "MainData", docId), {
        ThreaterName,
        TermsAndConditionss,
        PrivacyAndPolicy,
        Gstt: gstNumber, // Store GST as a number
        Notes,
      });
      toast.success("Updated successfully!");
    } catch (error) {
      console.error("Error updating document:", error);
      toast.error("Failed to update.");
    }
  };

  return (
    <div className="flex flex-col items-center p-6 bg-white shadow-lg rounded-lg w-full">
      {!isLoggedIn ? (
        <>
          <h2 className="text-2xl font-bold mb-4">Admin Login</h2>
          {error && <p className="text-red-500 mb-2">{error}</p>}
          <form onSubmit={handleLogin} className="w-full">
            <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} className="w-full px-4 py-2 border rounded-lg" required />
            <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full px-4 py-2 border rounded-lg" required />
            <button type="submit" className="w-full px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700">Login</button>
          </form>
        </>
      ) : (
        <div className="flex w-full gap-8">
          {/* Theater Details */}
          <div className="w-1/2 space-y-4">
            <h2 className="text-2xl font-bold mb-6">Theater Details</h2>
            <div>
              <label className="block text-sm font-medium">Theater Name:</label>
              <input
                type="text"
                placeholder="Theater Name"
                value={ThreaterName}
                onChange={(e) => setTheaterName(e.target.value)}
                className="w-full px-4 py-2 border rounded-lg"
              />
            </div>

            <div>
              <label className="block text-sm font-medium">GST Number:</label>
              <input
  type="number" // Ensure input type is number
  placeholder="GST Number"
  value={Gstt}
  onChange={(e) => setGstNumber(e.target.value.replace(/[^0-9.]/g, ""))} // Remove non-numeric values
  className="w-full px-4 py-2 border rounded-lg"
/>

            </div>

            <div>
              <label className="block text-sm font-medium">Terms & Conditions:</label>
              <textarea
                placeholder="Terms & Conditions"
                value={TermsAndConditionss}
                onChange={(e) => setTerms(e.target.value)}
                className="w-full px-4 py-2 border rounded-lg"
              />
            </div>

            <div>
              <label className="block text-sm font-medium">Privacy & Policy:</label>
              <textarea
                placeholder="Privacy Policy"
                value={PrivacyAndPolicy}
                onChange={(e) => setPolicy(e.target.value)}
                className="w-full px-4 py-2 border rounded-lg"
              />
            </div>

            <div>
              <label className="block text-sm font-medium">Notes:</label>
              <textarea
                placeholder="Notes"
                value={Notes}
                onChange={(e) => setNotes(e.target.value)}
                className="w-full px-4 py-2 border rounded-lg"
              />
            </div>

            <div className="flex gap-4 mt-6">
              <button
                onClick={handleUpdate}
                className="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 w-full sm:w-auto"
              >
                Update
              </button>
              <button
                onClick={() => navigate(-1)}
                className="bg-gray-500 text-white px-6 py-3 rounded-lg hover:bg-gray-600 w-full sm:w-auto"
              >
                Back
              </button>
            </div>
          </div>

          {/* Export Completed Orders */}
          <div className="w-1/2 space-y-4">
            <h2 className="text-2xl font-bold mt-6">Export Completed Orders</h2>
            <input type="date" value={format(startDate, 'yyyy-MM-dd')} onChange={(e) => setStartDate(new Date(e.target.value))} className="border rounded px-2 py-1" />
            <input type="date" value={format(endDate, 'yyyy-MM-dd')} onChange={(e) => setEndDate(new Date(e.target.value))} className="border rounded px-2 py-1" />
            
            <div className="mt-4">
              <p className="text-sm font-medium">Total Amount Collected: ₹{totalAmount}</p>
            </div>

            <button onClick={handleExport} className="bg-blue-500 text-white px-4 py-2 rounded">Export Orders</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default EditAndExport;
