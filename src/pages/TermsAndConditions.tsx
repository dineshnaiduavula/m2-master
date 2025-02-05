import { ArrowLeft } from 'lucide-react';
import React, { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { TermsAndConditionss } from '../constants/categories';

const TermsAndConditions: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const query = new URLSearchParams(location.search).toString();
  const k = TermsAndConditionss;
  const paragraphs = k.split(/\d+\.\s/).filter((p) => p.trim() !== ""); 

  useEffect(() => {
    // Scroll to the top of the page when the component is mounted
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8"> 
      {/* Fixed position for the Back to Payment button */}
      <button
        onClick={() => navigate(`/payment${query ? `?${query}` : ''}`)}
        className="flex items-center space-x-2 text-gray-600 hover:text-gray-900"
      >
        <ArrowLeft className="w-5 h-5" />
        <span className="text-red-600">Back to Payment</span>
      </button>

      <div className="p-6 m-4 border border-gray-300 rounded-lg bg-white shadow-sm">
        <h1 className="text-xl font-bold mb-4">Terms And Conditions</h1>

        <div className="text-gray-600 text-sm">
          {paragraphs.map((paragraph, index) => (
            <div key={index} className="mt-4">
              <h2 className="text-lg font-semibold">
                {index + 1}. {paragraph.split(" ")[0]}
              </h2>
              <p className="mt-2">{paragraph.slice(paragraph.indexOf(" ") + 1)}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions;
