import { User } from '../types/atm';

export const mockUsers: User[] = [
  {
    id: '1',
    pin: '1234',
    name: 'Arjun Surya',
    accounts: [
      {
        id: 'acc1',
        type: 'checking',
        balance: 2500.75,
        accountNumber: '****1234'
      },
      {
        id: 'acc2',
        type: 'savings',
        balance: 15750.00,
        accountNumber: '****5678'
      },
      {
        id: 'acc3',
        type: 'credit',
        balance: 3200.00,
        accountNumber: '****9012'
      }
    ],
    transactions: [
      {
        id: 'tx1',
        type: 'withdrawal',
        amount: 100,
        accountId: 'acc1',
        timestamp: new Date('2025-01-15T10:30:00'),
        description: 'ATM Withdrawal'
      },
      {
        id: 'tx2',
        type: 'deposit',
        amount: 500,
        accountId: 'acc2',
        timestamp: new Date('2025-01-14T14:15:00'),
        description: 'Cash Deposit'
      },
      {
        id: 'tx3',
        type: 'balance_inquiry',
        accountId: 'acc1',
        timestamp: new Date('2025-01-13T09:45:00'),
        description: 'Balance Inquiry'
      }
    ]
  },
  {
    id: '2',
    pin: '5678',
    name: 'Jane Smith',
    accounts: [
      {
        id: 'acc4',
        type: 'checking',
        balance: 1200.50,
        accountNumber: '****3456'
      },
      {
        id: 'acc5',
        type: 'savings',
        balance: 8900.25,
        accountNumber: '****7890'
      }
    ],
    transactions: []
  }
];
