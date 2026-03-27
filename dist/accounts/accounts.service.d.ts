import { AccountsRepository } from './accounts.repository';
import { Account } from './accounts.schema';
import { UpdateAccountDto } from './DTO/update-account.dto';
import { CreateAccountDto } from './DTO/create-account.dto';
export declare class AccountsService {
    private readonly _accountsRepository;
    constructor(_accountsRepository: AccountsRepository);
    findAll(): Promise<Account[]>;
    findOne(id: string): Promise<Account>;
    create(dto: CreateAccountDto): Promise<Account>;
    update(id: string, dto: UpdateAccountDto): Promise<Account>;
    remove(id: string): Promise<boolean>;
}
