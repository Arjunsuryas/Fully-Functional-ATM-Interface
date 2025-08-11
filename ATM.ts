export interface Account {
  id: string;
  type: 'checking' | 'savings' | 'credit';
  balance: number;
  accountNumber: string;
}

export interface Transaction {
  id: string;
  type: 'withdrawal' | 'deposit' | 'balance_inquiry';
  amount?: number;
  accountId: string;
  timestamp: Date;
  description: string;
}

export interface User {
  id: string;
  pin: string;
  name: string;
  accounts: Account[];
  transactions: Transaction[];
}

export type ATMScreen = 
  | 'welcome'
  | 'pin_entry'
  | 'main_menu'
  | 'account_selection'
  | 'balance_inquiry'
  | 'withdrawal'
  | 'deposit'
  | 'transaction_history'
  | 'receipt'
  | 'error';

export interface Receipt {
  transactionId: string;
  type: string;
  amount?: number;
  accountType: string;
  balance: number;
  timestamp: Date;
  location: string;
}
