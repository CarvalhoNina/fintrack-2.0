"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccountSchema = exports.Account = exports.AccountType = exports.Currency = void 0;
const mongoose_1 = require("@nestjs/mongoose");
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
let Account = class Account {
    clientId;
    bankName;
    type;
    balance;
    currency;
};
exports.Account = Account;
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], Account.prototype, "clientId", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], Account.prototype, "bankName", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, enum: AccountType }),
    __metadata("design:type", String)
], Account.prototype, "type", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: 0 }),
    __metadata("design:type", Number)
], Account.prototype, "balance", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, enum: Currency }),
    __metadata("design:type", String)
], Account.prototype, "currency", void 0);
exports.Account = Account = __decorate([
    (0, mongoose_1.Schema)({ timestamps: true })
], Account);
exports.AccountSchema = mongoose_1.SchemaFactory.createForClass(Account);
//# sourceMappingURL=accounts.schema.js.map