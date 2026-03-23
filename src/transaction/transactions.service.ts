import { Injectable, NotFoundException } from '@nestjs/common';
import { TransactionsRepository } from './transactions.repository';
import { Transaction } from './transaction.entity';
import { OriginatorsRepository } from 'src/originator/originators.repository';
import { AccountsRepository } from 'src/accounts/accounts.repository';
import { CategoriesRepository } from 'src/categories/categories.repository';
import { CreateTransactionDto } from './DTO/create-transaction.dto';
import { UpdateTransactionDto } from './DTO/update-transaction.dto';

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

  create(dto: CreateTransactionDto): Transaction {
    const originator = this._originatorsRepository.findById(dto.originatorId);
    if (!originator) throw new NotFoundException('Originator não encontrado');

    const account = this._accountsRepository.findById(dto.accountId);
    if (!account) throw new NotFoundException('Conta não encontrada');

    const category = this._categoryRepository.findById(dto.categoryId);
    if (!category) throw new NotFoundException('Categoria não encontrada');

    const newTransaction = new Transaction({
      amount: dto.amount,
      date: dto.date ? new Date(dto.date) : new Date(),
      originator,
      account,
      category,
    });

    return this._transactionsRepository.save(newTransaction);
  }

  update(id: string, dto: UpdateTransactionDto): Transaction | null {
    const transaction = this.findOne(id);
    if (!transaction) return null;

    Object.assign(transaction, dto);

    return this._transactionsRepository.save(transaction);
  }

  remove(id: string): boolean {
    return this._transactionsRepository.delete(id);
  }
}
