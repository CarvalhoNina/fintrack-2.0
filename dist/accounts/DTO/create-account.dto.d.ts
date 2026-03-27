import { AccountType, Currency } from '../accounts.schema';
export declare class CreateAccountDto {
    clientId: string;
    bankName: string;
    type: AccountType;
    currency: Currency;
    balance?: number;
}
