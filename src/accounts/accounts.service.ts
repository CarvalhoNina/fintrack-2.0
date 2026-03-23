import { Injectable, NotFoundException } from '@nestjs/common';
import { AccountsRepository } from './accounts.repository';
import { Account } from './account.entity';

import { CreateAccountDto } from './DTO/create-account.dto';
import { UpdateAccountDto } from './DTO/update-account.dto';

@Injectable()
export class AccountsService {
  constructor(private readonly _accountsRepository: AccountsRepository) {}

  findAll(): Account[] {
    return this._accountsRepository.findAll();
  }

  findOne(id: string): Account {
    const account = this._accountsRepository.findById(id);
    if (!account) {
      throw new NotFoundException(`Conta com ID ${id} não encontrada`);
    }
    return account;
  }

  create(dto: CreateAccountDto): Account {
    const newAccount = new Account({
      ...dto,
    });

    return this._accountsRepository.save(newAccount);
  }

  remove(id: string): boolean {
    const account = this._accountsRepository.findById(id);

    if (!account) {
      return false;
    }

    return this._accountsRepository.delete(id);
  }

  update(id: string, dto: UpdateAccountDto): Account {
    const account = this.findOne(id);

    Object.assign(account, dto);

    return this._accountsRepository.save(account);
  }
}
