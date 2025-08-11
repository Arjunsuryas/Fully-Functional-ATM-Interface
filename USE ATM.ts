import { useState, useCallback } from 'react';
import { User, Account, Transaction, ATMScreen, Receipt } from '../types/atm';
import { mockUsers } from '../data/mockData';

export const useATM = () => {
  const [currentScreen, setCurrentScreen] = useState<ATMScreen>('welcome');
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [selectedAccount, setSelectedAccount] = useState<Account | null>(null);
  const [pinInput, setPinInput] = useState('');
  const [amountInput, setAmountInput] = useState('');
  const [currentReceipt, setCurrentReceipt] = useState<Receipt | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const clearInputs = useCallback(() => {
    setPinInput('');
    setAmountInput('');
    setError(null);
  }, []);

  const authenticateUser = useCallback((pin: string) => {
    setIsLoading(true);
    
    // Simulate network delay
    setTimeout(() => {
      const user = mockUsers.find(u => u.pin === pin);
      if (user) {
        setCurrentUser(user);
        setCurrentScreen('main_menu');
        setError(null);
      } else {
        setError('Invalid PIN. Please try again.');
        setPinInput('');
      }
      setIsLoading(false);
    }, 1000);
  }, []);

  const selectAccount = useCallback((accountId: string) => {
    if (currentUser) {
      const account = currentUser.accounts.find(acc => acc.id === accountId);
      if (account) {
        setSelectedAccount(account);
      }
    }
  }, [currentUser]);

  const addTransaction = useCallback((transaction: Omit<Transaction, 'id' | 'timestamp'>) => {
};
