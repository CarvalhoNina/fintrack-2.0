import { AccountType, BankName, Currency } from '../accounts.schema';
export declare class CreateAccountDto {
    user: string;
    bankName: BankName;
    type: AccountType;
    currency: Currency;
    balance?: number;
}
