import React from "react";
import { useNavigate } from "react-router-dom"; // Import for navigation
import logo from "../public/WhatsApp Image 2024-12-01 at 11.17.39 AM.jpeg";

export default function App() {
  const navigate = useNavigate();

  const theaters = [
    { name: "Theatre 1", image: logo , idName: '0tf1'},
    { name: "Theatre 2", image: "image_url_2.jpg", idName: '0tf2'},
    { name: "Theatre 3", image: "image_url_3.jpg", idName: '0tf3' },
    { name: "Theatre 4", image: "image_url_4.jpg", idName: '0tf4' },
    { name: "Theatre 5", image: "image_url_5.jpg", idName: '0tf5' },
    { name: "Theatre 6", image: "image_url_6.jpg", idName: '0tf6' },
    { name: "Theatre 7", image: "image_url_7.jpg", idName: '0tf7' },
    { name: "Theatre 8", image: "image_url_8.jpg", idName: '0tf8' },
    { name: "Theatre 9", image: "image_url_9.jpg", idName: '0tf9' },
    { name: "Theatre 10", image: "image_url_10.jpg", idName: '0tf10' },
    { name: "Theatre 11", image: "image_url_11.jpg", idName: '0tf11' },
    { name: "Theatre 12", image: "image_url_12.jpg", idName: '0tf12' },
    { name: "Theatre 13", image: "image_url_13.jpg", idName: '0tf13' },
    { name: "Theatre 14", image: "image_url_14.jpg", idName: '0tf14' },
    { name: "Theatre 15", image: "image_url_15.jpg", idName: '0tf15' },
    { name: "Theatre 16", image: "image_url_16.jpg", idName: '0tf16' },
  ];

  const handleCardClick = (theaterName: string) => {
    const queryParam = theaterName.toLowerCase().replace(/\s+/g, "");
    navigate(`/options?theater=${queryParam}`);
  };

  return (
    <div className="flex flex-col items-center h-screen bg-yellow-50">
      <h1 className="text-2xl font-bold my-6">Theaters</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
        {theaters.map((theater, index) => (
          <div
            key={index}
            className="relative overflow-hidden bg-green-200 rounded-lg shadow-lg h-48 cursor-pointer"
            onClick={() => handleCardClick(theater.idName)} // Handle click
          >
            <img
              src={theater.image}
              alt={theater.name}
              className="object-cover w-full h-full"
            />
            <div className="absolute inset-0 flex items-center justify-center text-white font-bold text-lg">
              <span className="bg-black bg-opacity-90 px-2 py-1 rounded">
                {theater.name}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
