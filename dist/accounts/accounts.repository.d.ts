import { Account } from './account.entity';
export declare class AccountsRepository {
    private readonly _accounts;
    save(account: Account): Account;
    findAll(): Account[];
    findById(id: string): Account | undefined;
    delete(id: string): boolean;
}
