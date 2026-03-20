import { Injectable } from '@nestjs/common';
import { Account } from './account.entity';

@Injectable()
export class AccountsRepository {
  private readonly _accounts: Account[] = [];

  save(account: Account): Account {
    if (!account.id) {
      account.id = Math.random().toString(36).substring(7);
      this._accounts.push(account);
    } else {
      const index = this._accounts.findIndex((a) => a.id === account.id);
      if (index !== -1) {
        this._accounts[index] = account;
      }
    }
    return account;
  }

  findAll(): Account[] {
    return [...this._accounts];
  }

  findOne(id: string): Account | null {
    return this._repository.findById(id) || null;
  }

  delete(id: string): boolean {
    const index = this._accounts.findIndex((client) => client.id === id);

    if (index === -1) {
      return false;
    }

    this._accounts.splice(index, 1);

    return true;
  }
}
