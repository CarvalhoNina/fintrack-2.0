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
    const transaction = this._repository.findById(id);

    if (!transaction) {
      return null;
    }

    return transaction;
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
}
