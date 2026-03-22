import { AccountsService } from './accounts.service';
import { Account, AccountType, Currency } from './account.entity';
export declare class AccountsController {
    private readonly _service;
    constructor(_service: AccountsService);
    findAll(): Account[];
    findOne(id: string): Account | null;
    create(clientId: string, bankName: string, type: AccountType, currency: Currency, balance?: number): Account;
    update(id: string, data: Partial<Account>): Account | null;
    remove(id: string): boolean;
}
