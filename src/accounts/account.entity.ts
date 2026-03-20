export enum Currency {
  BRL = 'BRL',
  CAD = 'CAD',
  USD = 'USD',
  EUR = 'EUR',
}

export class Account {
  id: string;
  clientId: string;
  bankName: string;
  type: 'checking' | 'savings' | 'credit';
  balance: number = 0;
  currency: Currency;

  constructor(partial: Partial<Account>) {
    Object.assign(this, partial);
  }
}
