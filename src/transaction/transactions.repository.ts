import { Injectable } from '@nestjs/common';
import { Transaction } from './transaction.entity';

@Injectable()
export class TransactionsRepository {
  private readonly _transactions: Transaction[] = [];

  save(transaction: Transaction): Transaction {
    if (!transaction.id) {
      transaction.id = Math.random().toString(36).substring(7);
    }

    this._transactions.push(transaction);
    return transaction;
  }

  findAll(): Transaction[] {
    return [...this._transactions];
  }

  findById(id: string): Transaction | undefined {
    return this._transactions.find((t) => t.id === id);
  }

  delete(id: string): boolean {
    const index = this._transactions.findIndex((t) => t.id === id);

    if (index === -1) {
      return false;
    }

    this._transactions.splice(index, 1);

    return true;
  }
}
