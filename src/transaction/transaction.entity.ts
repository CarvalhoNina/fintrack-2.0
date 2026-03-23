import { Account } from 'src/accounts/account.entity';
import { Category } from 'src/categories/categories.entity';
import { Originator } from 'src/originator/originator.entity.ts';

export class Transaction {
  id: string;
  amount: number;
  date: Date;
  originator: Originator;
  account: Account;
  category: Category;

  constructor(partial: Partial<Transaction>) {
    Object.assign(this, partial);

    this.date = this.date || new Date();
  }
}
