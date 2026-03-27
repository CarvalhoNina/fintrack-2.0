import { Model } from 'mongoose';
import { AccountDocument } from './accounts.schema';
import { CreateAccountDto } from './DTO/create-account.dto';
import { UpdateAccountDto } from './DTO/update-account.dto';
export declare class AccountsRepository {
    private readonly _accountModel;
    constructor(_accountModel: Model<AccountDocument>);
    save(dto: CreateAccountDto): Promise<AccountDocument>;
    findAll(): Promise<AccountDocument[]>;
    findById(id: string): Promise<AccountDocument | null>;
    update(id: string, dto: UpdateAccountDto): Promise<AccountDocument | null>;
    delete(id: string): Promise<boolean>;
}
