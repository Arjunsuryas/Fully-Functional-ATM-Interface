import React from 'react';

interface ATMScreenProps {
  title?: string;
  children: React.ReactNode;
  showBackButton?: boolean;
  onBack?: () => void;
}

const ATMScreen: React.FC<ATMScreenProps> = ({ 
  title, 
  children, 
  showBackButton = false, 
  onBack 
}) => {
  return (
    <div className="bg-gray-900 border-4 border-gray-700 rounded-2xl p-8 min-h-[500px] shadow-2xl">
      <div className="bg-blue-950 border-2 border-blue-800 rounded-xl p-6 h-full">
        {title && (
          <div className="bg-blue-900 -mx-6 -mt-6 mb-6 p-4 rounded-t-xl border-b-2 border-blue-800">
            <h2 className="text-xl font-bold text-blue-100 text-center tracking-wide">
              {title}
            </h2>
          </div>
        )}
        
        <div className="text-blue-100 space-y-4">
          {children}
        </div>
        
        {showBackButton && onBack && (
          <div className="mt-8 flex justify-center">
            <button
              onClick={onBack}
              className="bg-gray-700 hover:bg-gray-600 text-white px-6 py-2 rounded-lg font-semibold transition-colors duration-200"
            >
              ← Back
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ATMScreen;
