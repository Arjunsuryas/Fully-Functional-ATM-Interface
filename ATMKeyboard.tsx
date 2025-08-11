import React from 'react';

interface ATMKeypadProps {
  onNumberPress: (num: string) => void;
  onClear: () => void;
  onEnter: () => void;
  onCancel: () => void;
  disabled?: boolean;
}

const ATMKeypad: React.FC<ATMKeypadProps> = ({ 
  onNumberPress, 
  onClear, 
  onEnter, 
  onCancel, 
  disabled = false 
}) => {
  const numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];

  return (
    <div className="grid grid-cols-3 gap-3 max-w-xs mx-auto">
      {numbers.slice(0, 9).map((num) => (
        <button
          key={num}
          onClick={() => onNumberPress(num)}
          disabled={disabled}
          className="bg-gray-700 hover:bg-gray-600 disabled:bg-gray-800 disabled:cursor-not-allowed text-white text-xl font-bold py-4 px-6 rounded-lg transition-all duration-150 active:scale-95 shadow-lg"
        >
          {num}
        </button>
      ))}
      
      <button
        onClick={onClear}
        disabled={disabled}
        className="bg-red-600 hover:bg-red-500 disabled:bg-red-800 disabled:cursor-not-allowed text-white text-sm font-bold py-4 px-6 rounded-lg transition-all duration-150 active:scale-95 shadow-lg"
      >
        CLEAR
      </button>
      
      <button
        onClick={() => onNumberPress('0')}
        disabled={disabled}
        className="bg-gray-700 hover:bg-gray-600 disabled:bg-gray-800 disabled:cursor-not-allowed text-white text-xl font-bold py-4 px-6 rounded-lg transition-all duration-150 active:scale-95 shadow-lg"
      >
        0
      </button>
      
      <button
        onClick={onEnter}
        disabled={disabled}
        className="bg-green-600 hover:bg-green-500 disabled:bg-green-800 disabled:cursor-not-allowed text-white text-sm font-bold py-4 px-6 rounded-lg transition-all duration-150 active:scale-95 shadow-lg"
      >
        ENTER
      </button>
      
      <button
        onClick={onCancel}
        disabled={disabled}
        className="col-span-3 bg-orange-600 hover:bg-orange-500 disabled:bg-orange-800 disabled:cursor-not-allowed text-white text-sm font-bold py-3 px-6 rounded-lg transition-all duration-150 active:scale-95 shadow-lg mt-2"
      >
        CANCEL
      </button>
    </div>
  );
};

export default ATMKeypad;
