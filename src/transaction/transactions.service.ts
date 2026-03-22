import { Injectable } from '@nestjs/common';
import { TransactionsRepository } from './transactions.repository';
import { Transaction } from './transaction.entity';

@Injectable()
export class TransactionsService {
  constructor(private readonly _repository: TransactionsRepository) {}

  findAll(): Transaction[] {
    return this._repository.findAll();
  }

  findOne(id: string): Transaction | null {
    return this._repository.findById(id) || null;
  }

  create(description: string, amount: number): Transaction {
    let label = 'General';
    const descLower = description.toLowerCase();

    if (descLower.includes('tim hortons') || descLower.includes('starbucks')) {
      label = 'Coffee ☕';
    } else if (
      descLower.includes('walmart') ||
      descLower.includes('no frills')
    ) {
      label = 'Groceries 🛒';
    }

    const newTransaction = new Transaction({
      description,
      amount,
      label,
      currency: 'CAD',
    });

    return this._repository.save(newTransaction);
  }

  update(id: string, data: Partial<Transaction>): Transaction | null {
    const transaction = this.findOne(id);
    if (!transaction) return null;

    Object.assign(transaction, data);
    return transaction;
  }

  remove(id: string): boolean {
    return this._repository.delete(id);
  }
}
