export class Transaction {
  id: string;
  description: string;
  amount: number;
  currency: string;
  label: string;
  date: Date;

  constructor(partial: Partial<Transaction>) {
    Object.assign(this, partial);

    this.date = this.date || new Date();
  }
}
