import { Injectable, NotFoundException } from '@nestjs/common';
import { AccountsRepository } from './accounts.repository';
import { Account } from './accounts.schema';
import { UpdateAccountDto } from './DTO/update-account.dto';
import { CreateAccountDto } from './DTO/create-account.dto';

@Injectable()
export class AccountsService {
  constructor(private readonly _accountsRepository: AccountsRepository) {}

  async findAll(): Promise<Account[]> {
    return await this._accountsRepository.findAll();
  }

  async findOne(id: string): Promise<Account> {
    const account = await this._accountsRepository.findById(id);
    if (!account) {
      throw new NotFoundException(`Conta com ID ${id} não encontrada`);
    }
    return account;
  }

  async create(dto: CreateAccountDto): Promise<Account> {
    return await this._accountsRepository.save(dto);
  }

  async update(id: string, dto: UpdateAccountDto): Promise<Account> {
    await this.findOne(id);

    const updatedAccount = await this._accountsRepository.update(id, dto);

    if (!updatedAccount) {
      throw new NotFoundException(`Erro ao atualizar a conta com ID ${id}`);
    }

    return updatedAccount;
  }

  async remove(id: string): Promise<boolean> {
    await this.findOne(id);

    return await this._accountsRepository.delete(id);
  }
}
