import { Injectable, NotFoundException } from '@nestjs/common';
import { TransactionsRepository } from './transactions.repository';
import { OriginatorsRepository } from 'src/originator/originators.repository';
import { AccountsRepository } from 'src/accounts/accounts.repository';
import { CategoriesRepository } from 'src/categories/categories.repository';
import { CreateTransactionDto } from './DTO/create-transaction.dto';
import { UpdateTransactionDto } from './DTO/update-transaction.dto';
import { Transaction } from './transaction.schema';

@Injectable()
export class TransactionsService {
  constructor(
    private readonly _transactionsRepository: TransactionsRepository,
    private readonly _originatorsRepository: OriginatorsRepository,
    private readonly _accountsRepository: AccountsRepository,
    private readonly _categoryRepository: CategoriesRepository,
  ) {}

  async findAll(): Promise<Transaction[]> {
    return await this._transactionsRepository.findAll();
  }

  async findOne(id: string): Promise<Transaction | null> {
    return (await this._transactionsRepository.findById(id)) || null;
  }

  async create(dto: CreateTransactionDto): Promise<Transaction> {
    const originator = await this._originatorsRepository.findById(
      dto.originatorId,
    );
    if (!originator) {
      throw new NotFoundException('O Originator informado não existe.');
    }

    const account = await this._accountsRepository.findById(dto.accountId);
    if (!account) {
      throw new NotFoundException('A conta informada não existe.');
    }

    const category = await this._categoryRepository.findById(dto.categoryId);
    if (!category) {
      throw new NotFoundException('A categoria informada não existe.');
    }

    return await this._transactionsRepository.save(dto);
  }

  async update(
    id: string,
    dto: UpdateTransactionDto,
  ): Promise<Transaction | null> {
    const transaction = await this.findOne(id);
    if (!transaction) {
      throw new NotFoundException('Transação não encontrada.');
    }

    return await this._transactionsRepository.update(id, dto);
  }

  async remove(id: string): Promise<boolean> {
    return this._transactionsRepository.delete(id);
  }
}
