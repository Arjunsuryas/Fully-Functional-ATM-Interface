import React from 'react';
import { Account } from '../types/atm';
import { CreditCard, Wallet, PiggyBank } from 'lucide-react';

interface AccountCardProps {
  account: Account;
  onClick: (accountId: string) => void;
}

const AccountCard: React.FC<AccountCardProps> = ({ account, onClick }) => {
  const getAccountIcon = () => {
    switch (account.type) {
      case 'checking':
        return <Wallet className="w-6 h-6" />;
      case 'savings':
        return <PiggyBank className="w-6 h-6" />;
      case 'credit':
        return <CreditCard className="w-6 h-6" />;
      default:
        return <Wallet className="w-6 h-6" />;
    }
  };

  const getAccountColor = () => {
    switch (account.type) {
      case 'checking':
        return 'from-blue-600 to-blue-800';
      case 'savings':
        return 'from-green-600 to-green-800';
      case 'credit':
        return 'from-purple-600 to-purple-800';
      default:
        return 'from-blue-600 to-blue-800';
    }
  };

  return (
    <button
      onClick={() => onClick(account.id)}
      className={`w-full bg-gradient-to-r ${getAccountColor()} hover:scale-105 transition-transform duration-200 p-4 rounded-xl shadow-lg border border-opacity-30 border-white`}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          {getAccountIcon()}
          <div className="text-left">
            <p className="font-semibold capitalize text-white">
              {account.type} Account
            </p>
            <p className="text-sm text-blue-100">
              {account.accountNumber}
            </p>
          </div>
        </div>
        <div className="text-right">
          <p className="text-2xl font-bold text-white">
            ${account.balance.toLocaleString('en-US', { 
              minimumFractionDigits: 2, 
              maximumFractionDigits: 2 
            })}
          </p>
        </div>
      </div>
    </button>
  );
};

export default AccountCard;
