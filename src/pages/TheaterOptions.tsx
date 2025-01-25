import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function Options() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const theater = queryParams.get("theater");
  const navigate = useNavigate(); // To navigate to different routes

  const handleLogin = (role: string) => {
    // const theaterParam = theater.toLowerCase(); // Assuming theater is something like 'Theatre 1'
    
    if (role === "User") {
      navigate(`/theater?=${theater}`);
    } else if (role === "Admin") {
      navigate(`/admin/login?=${theater}`);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-blue-50">
      <h1 className="text-3xl font-bold mb-6">
        Welcome to {theater} Options
      </h1>
      <div className="flex flex-col gap-4">
        {/* User Login Button */}
        <button
          onClick={() => handleLogin("User")}
          className="px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-700 transition"
        >
          User Login
        </button>
        
        {/* Admin Login Button */}
        <button
          onClick={() => handleLogin("Admin")}
          className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-700 transition"
        >
          Admin Login
        </button>
      </div>
    </div>
  );
}
