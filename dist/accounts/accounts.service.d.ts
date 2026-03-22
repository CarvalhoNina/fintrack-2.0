import { AccountsRepository } from './accounts.repository';
import { Account } from './account.entity';
import { AccountType } from './account.entity';
import { Currency } from './account.entity';
export declare class AccountsService {
    private readonly _repository;
    constructor(_repository: AccountsRepository);
    findAll(): Account[];
    findOne(id: string): Account | null;
    create(clientId: string, bankName: string, type: AccountType, currency: Currency, balance?: number): Account;
    remove(id: string): boolean;
    update(id: string, data: Partial<Account>): Account | null;
}
