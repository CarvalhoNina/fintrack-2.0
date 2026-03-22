"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Account = exports.AccountType = exports.Currency = void 0;
var Currency;
(function (Currency) {
    Currency["BRL"] = "BRL";
    Currency["CAD"] = "CAD";
    Currency["USD"] = "USD";
    Currency["EUR"] = "EUR";
})(Currency || (exports.Currency = Currency = {}));
var AccountType;
(function (AccountType) {
    AccountType["CHECKING"] = "checking";
    AccountType["SAVINGS"] = "savings";
    AccountType["CREDIT"] = "credit";
})(AccountType || (exports.AccountType = AccountType = {}));
class Account {
    id;
    clientId;
    bankName;
    type;
    balance = 0;
    currency;
    constructor(partial) {
        Object.assign(this, partial);
    }
}
exports.Account = Account;
//# sourceMappingURL=account.entity.js.map