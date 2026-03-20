export enum Currency {
  BRL = 'BRL',
  CAD = 'CAD',
  USD = 'USD',
  EUR = 'EUR',
}

export enum AccountType {
  CHECKING = 'checking',
  SAVINGS = 'savings',
  CREDIT = 'credit',
}

export class Account {
  id: string;
  clientId: string;
  bankName: string;
  type: AccountType;
  balance: number = 0;
  currency: Currency;

  constructor(partial: Partial<Account>) {
    Object.assign(this, partial);
  }
}
