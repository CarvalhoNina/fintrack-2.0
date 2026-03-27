import { AccountsService } from './accounts.service';
import { Account } from './accounts.schema';
import { CreateAccountDto } from './DTO/create-account.dto';
import { UpdateAccountDto } from './DTO/update-account.dto';
export declare class AccountsController {
    private readonly _accountsService;
    constructor(_accountsService: AccountsService);
    findAll(): Promise<Account[]>;
    findOne(id: string): Promise<Account | null>;
    create(createAccountDto: CreateAccountDto): Promise<Account>;
    update(id: string, updateAccountDto: UpdateAccountDto): Promise<Account>;
    remove(id: string): Promise<boolean>;
}
