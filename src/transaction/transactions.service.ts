import { Injectable, NotFoundException } from '@nestjs/common';
import { TransactionsRepository } from './transactions.repository';
import { OriginatorsRepository } from 'src/originator/originators.repository';
import { AccountsRepository } from 'src/accounts/accounts.repository';
import { CategoriesRepository } from 'src/categories/categories.repository';
import { CreateTransactionDto } from './DTO/create-transaction.dto';
import { UpdateTransactionDto } from './DTO/update-transaction.dto';
import { Transaction } from './transaction.schema';
import { UsersRepository } from 'src/users/users.repository';

@Injectable()
export class TransactionsService {
  constructor(
    private readonly _transactionsRepository: TransactionsRepository,
    private readonly _originatorsRepository: OriginatorsRepository,
    private readonly _accountsRepository: AccountsRepository,
    private readonly _categoryRepository: CategoriesRepository,
    private readonly _usersRepository: UsersRepository,
  ) {}

  async create(dto: CreateTransactionDto): Promise<Transaction> {
    const user = await this._usersRepository.findById(dto.user);
    if (!user) throw new NotFoundException('O usuário não existe.');

    const originator = await this._originatorsRepository.findById(
      dto.originator,
    );
    if (!originator) throw new NotFoundException('Originator não existe.');

    const account = await this._accountsRepository.findById(dto.account);
    if (!account) throw new NotFoundException('A conta não existe.');

    const category = await this._categoryRepository.findById(dto.category);
    if (!category) throw new NotFoundException('A categoria não existe.');

    return await this._transactionsRepository.save(dto);
  }

  async findAll(): Promise<Transaction[]> {
    return await this._transactionsRepository.findAll();
  }

  async findOne(id: string): Promise<Transaction | null> {
    return (await this._transactionsRepository.findById(id)) || null;
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
