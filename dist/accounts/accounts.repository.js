"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccountsRepository = void 0;
const common_1 = require("@nestjs/common");
let AccountsRepository = class AccountsRepository {
    _accounts = [];
    save(account) {
        if (!account.id) {
            account.id = Math.random().toString(36).substring(7);
            this._accounts.push(account);
        }
        else {
            const index = this._accounts.findIndex((a) => a.id === account.id);
            if (index !== -1) {
                this._accounts[index] = account;
            }
        }
        return account;
    }
    findAll() {
        return [...this._accounts];
    }
    findById(id) {
        return this._accounts.find((t) => t.id === id);
    }
    delete(id) {
        const index = this._accounts.findIndex((client) => client.id === id);
        if (index === -1) {
            return false;
        }
        this._accounts.splice(index, 1);
        return true;
    }
};
exports.AccountsRepository = AccountsRepository;
exports.AccountsRepository = AccountsRepository = __decorate([
    (0, common_1.Injectable)()
], AccountsRepository);
//# sourceMappingURL=accounts.repository.js.map