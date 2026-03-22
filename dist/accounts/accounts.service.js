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
exports.AccountsService = void 0;
const common_1 = require("@nestjs/common");
const accounts_repository_1 = require("./accounts.repository");
const account_entity_1 = require("./account.entity");
let AccountsService = class AccountsService {
    _repository;
    constructor(_repository) {
        this._repository = _repository;
    }
    findAll() {
        return this._repository.findAll();
    }
    findOne(id) {
        const account = this._repository.findById(id);
        if (!account) {
            return null;
        }
        return account;
    }
    create(clientId, bankName, type, currency, balance = 0) {
        const newAccount = new account_entity_1.Account({
            clientId,
            bankName,
            type,
            currency,
            balance,
        });
        return this._repository.save(newAccount);
    }
    remove(id) {
        const account = this._repository.findById(id);
        if (!account) {
            return false;
        }
        return this._repository.delete(id);
    }
    update(id, data) {
        const account = this.findOne(id);
        if (!account) {
            return null;
        }
        Object.assign(account, data);
        return this._repository.save(account);
    }
};
exports.AccountsService = AccountsService;
exports.AccountsService = AccountsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [accounts_repository_1.AccountsRepository])
], AccountsService);
//# sourceMappingURL=accounts.service.js.map