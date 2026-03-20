import { Injectable } from '@nestjs/common';
import { AccountsRepository } from './accounts.repository';
import { Account } from './account.entity';
import { AccountType } from './account.entity';
import { Currency } from './account.entity';

@Injectable()
export class AccountsService {
  constructor(private readonly _repository: AccountsRepository) {}

  findAll(): Account[] {
    return this._repository.findAll();
  }

  findOne(id: string): Account | null {
    const account = this._repository.findById(id);

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

    return this._repository.save(newAccount);
  }

  remove(id: string): boolean {
    const account = this._repository.findById(id);

    if (!account) {
      return false;
    }

    return this._repository.delete(id);
  }

  update(id: string, data: Partial<Account>): Account | null {
    const account = this.findOne(id);

    if (!account) {
      return null;
    }

    Object.assign(account, data);

    return this._repository.save(account);
  }
}
