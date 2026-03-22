export declare enum Currency {
    BRL = "BRL",
    CAD = "CAD",
    USD = "USD",
    EUR = "EUR"
}
export declare enum AccountType {
    CHECKING = "checking",
    SAVINGS = "savings",
    CREDIT = "credit"
}
export declare class Account {
    id: string;
    clientId: string;
    bankName: string;
    type: AccountType;
    balance: number;
    currency: Currency;
    constructor(partial: Partial<Account>);
}
