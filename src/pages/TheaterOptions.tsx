import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { getFirebaseConfig } from "../lib/firebase";

export default function Options() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const theater = queryParams.get("theater");
  const navigate = useNavigate(); // To navigate to different routes

  const handleScreenNavigation = (screenNumber) => {
    getFirebaseConfig(); 
    const updatedTheater = `${screenNumber}${theater.slice(1)}`;
    navigate(`/theater?theater=${updatedTheater}`);
    window.location.reload();
  };

  const handleLogin = (role) => {
    if (role === "Admin") {
      getFirebaseConfig();
      navigate(`/admin/login?=${theater}`);
      window.location.reload();
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-blue-50">
      <h1 className="text-3xl font-bold mb-6">Welcome to {theater} Options</h1>
      <div className="grid grid-cols-2 gap-4">
        {/* Screen Buttons */}
        {Array.from({ length: 6 }, (_, i) => (
          <button
            key={i + 1}
            onClick={() => handleScreenNavigation(i + 1)}
            className="px-6 py-3 bg-purple-500 text-white rounded-lg hover:bg-purple-700 transition"
          >
            Screen {i + 1}
          </button>
        ))}
      </div>

      {/* Admin Login Button */}
      <button
        onClick={() => handleLogin("Admin")}
        className="mt-6 px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-700 transition"
      >
        Admin Login
      </button>
    </div>
  );
}
