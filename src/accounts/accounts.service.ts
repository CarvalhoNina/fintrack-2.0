import { Injectable } from '@nestjs/common';
import { AccountsRepository } from './accounts.repository';
import { Account } from './account.entity';
import { AccountType } from './account.entity';
import { Currency } from './account.entity';

@Injectable()
export class AccountsService {
  constructor(private readonly _accountsRepository: AccountsRepository) {}

  findAll(): Account[] {
    return this._accountsRepository.findAll();
  }

  findOne(id: string): Account | null {
    const account = this._accountsRepository.findById(id);

    if (!account) {
      return null;
    }

    return account;
  }

  create(
    clientId: string,
    bankName: string,
    type: AccountType,
    currency: Currency,
    balance: number = 0,
  ): Account {
    const newAccount = new Account({
      clientId,
      bankName,
      type,
      currency,
      balance,
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

  update(id: string, data: Partial<Account>): Account | null {
    const account = this.findOne(id);

    if (!account) {
      return null;
    }

    Object.assign(account, data);

    return this._accountsRepository.save(account);
  }
}
