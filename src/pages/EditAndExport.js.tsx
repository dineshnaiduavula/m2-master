import React, { useState, useEffect } from "react";
import { getFirebaseConfig } from "../lib/firebase";
import { collection, getDocs, doc, setDoc } from "firebase/firestore";
import { db } from "../lib/firebase";

const EditAndExport = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [docId, setDocId] = useState(""); // Store document ID

  // Form fields
  const [ThreaterName, setTheaterName] = useState("");
  const [TermsAndConditionss, setTerms] = useState("");
  const [PrivacyAndPolicy, setPolicy] = useState("");
  const [Gstt, setGstNumber] = useState("");
  const [Notes, setNotes] = useState("");

  // Fetch data from Firestore after login
  useEffect(() => {
    if (isLoggedIn) {
      const fetchData = async () => {
        try {
          const collectionRef = collection(db, "MainData");
          const querySnapshot = await getDocs(collectionRef);

          if (!querySnapshot.empty) {
            const firstDoc = querySnapshot.docs[0]; // Get first document
            const data = firstDoc.data();

            setTheaterName(data.ThreaterName || "");
            setTerms(data.TermsAndConditionss || "");
            setPolicy(data.PrivacyAndPolicy || "");
            setGstNumber(data.Gstt || "");
            setNotes(data.Notes || "");
            setDocId(firstDoc.id); // Store document ID for updating
          }
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      };

      fetchData();
    }
  }, [isLoggedIn]); // Runs when `isLoggedIn` changes

  const handleLogin = (e) => {
    e.preventDefault();
    getFirebaseConfig();

    if (username === "navya@gmail.com" && password === "123456") {
      setIsLoggedIn(true);
    } else {
      setError("Invalid username or password");
    }
  };

  const handleSave = async () => {
    try {
      if (!docId) {
        alert("Error: No document found to update!");
        return;
      }

      const docRef = doc(db, "MainData", docId);
      await setDoc(docRef, {
        ThreaterName,
        TermsAndConditionss,
        PrivacyAndPolicy,
        Gstt: Number(Gstt), 
        Notes,
      });

      alert("Data saved successfully!");
    } catch (error) {
      console.error("Error saving data:", error);
      alert("Failed to save data.");
    }
  };

  const handleBack = () => {
    setIsLoggedIn(false); // Log out
  };

  return (
    <div className="flex flex-col items-center p-6 bg-white shadow-lg rounded-lg w-96">
      {!isLoggedIn ? (
        <>
          <h2 className="text-2xl font-bold mb-4">Admin Login</h2>
          {error && <p className="text-red-500 mb-2">{error}</p>}
          <form onSubmit={handleLogin} className="w-full">
            <div className="mb-4">
              <label className="block text-gray-700">Username</label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full px-4 py-2 border rounded-lg"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 border rounded-lg"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700 transition"
            >
              Login
            </button>
          </form>
        </>
      ) : (
        <>
          <h2 className="text-2xl font-bold mb-4">Theater Details</h2>
          <div className="mb-4 w-full">
            <label className="block text-gray-700">Name of the Theatre</label>
            <input
              type="text"
              value={ThreaterName}
              onChange={(e) => setTheaterName(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg"
            />
          </div>
          <div className="mb-4 w-full">
            <label className="block text-gray-700">GST Number</label>
            <input
                type="number"
                 value={Gstt}
             onChange={(e) => setGstNumber(Number(e.target.value))} // Convert to number
            className="w-full px-4 py-2 border rounded-lg"
                />

          </div>
          <div className="mb-4 w-full">
            <label className="block text-gray-700">Terms & Conditions</label>
            <textarea
              value={TermsAndConditionss}
              onChange={(e) => setTerms(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg"
            />
          </div>
          <div className="mb-4 w-full">
            <label className="block text-gray-700">Policy & Privacy</label>
            <textarea
              value={PrivacyAndPolicy}
              onChange={(e) => setPolicy(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg"
            />
          </div>
          
          <div className="mb-4 w-full">
            <label className="block text-gray-700">Notes</label>
            <textarea
              value={Notes}
              onChange={(e) => setNotes(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg"
            />
          </div>
          <div className="flex gap-4 w-full">
            <button
              onClick={handleSave}
              className="w-1/2 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-700 transition"
            >
              Update
            </button>
            <button
              onClick={handleBack}
              className="w-1/2 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-700 transition"
            >
              Back
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default EditAndExport;
