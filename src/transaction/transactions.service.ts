import { Injectable, NotFoundException } from '@nestjs/common';
import { TransactionsRepository } from './transactions.repository';
import { Transaction } from './transaction.entity';
import { OriginatorsRepository } from 'src/originator/originators.repository';
import { AccountsRepository } from 'src/accounts/accounts.repository';
import { CategoriesRepository } from 'src/categories/categories.repository';

@Injectable()
export class TransactionsService {
  constructor(
    private readonly _transactionsRepository: TransactionsRepository,
    private readonly _originatorsRepository: OriginatorsRepository,
    private readonly _accountsRepository: AccountsRepository,
    private readonly _categoryRepository: CategoriesRepository,
  ) {}

  findAll(): Transaction[] {
    return this._transactionsRepository.findAll();
  }

  findOne(id: string): Transaction | null {
    return this._transactionsRepository.findById(id) || null;
  }

  create(
    amount: number,
    originatorId: string,
    accountId: string,
    categoryId: string,
  ): Transaction {
    const originator = this._originatorsRepository.findById(originatorId);
    if (!originator) {
      throw new NotFoundException('Originator não encontrado!');
    }

    const account = this._accountsRepository.findById(accountId);
    if (!account) {
      throw new NotFoundException('Conta não encontrada!');
    }

    const category = this._categoryRepository.findById(categoryId);
    if (!category) {
      throw new NotFoundException('Categoria não encontrada!');
    }

    const newTransaction = new Transaction({
      amount,
      originator,
      account,
      date: new Date(),
      category,
    });

    return this._transactionsRepository.save(newTransaction);
  }

  update(id: string, data: Partial<Transaction>): Transaction | null {
    const transaction = this.findOne(id);
    if (!transaction) return null;

    Object.assign(transaction, data);
    return transaction;
  }

  remove(id: string): boolean {
    return this._transactionsRepository.delete(id);
  }
}
