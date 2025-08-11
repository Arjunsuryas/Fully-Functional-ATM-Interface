import React from 'react';
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-800 via-gray-900 to-black flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* ATM Header */}
        <div className="bg-gray-700 rounded-t-2xl p-4 border-b-2 border-gray-600">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Building2 className="w-6 h-6 text-blue-400" />
              <span className="font-bold text-blue-100">SecureBank ATM</span>
            </div>
            <div className="flex items-center space-x-1 text-green-400">
              <Clock className="w-4 h-4" />
              <span className="text-sm">24/7</span>
            </div>
          </div>
        </div>

        {/* ATM Screen */}
        {renderScreen()}

        {/* ATM Footer */}
        <div className="bg-gray-700 rounded-b-2xl p-3 border-t-2 border-gray-600">
          <p className="text-center text-xs text-gray-300">
            Demo ATM - Use PIN: 1234 or 5678
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
