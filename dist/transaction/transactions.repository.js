"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionsRepository = void 0;
const common_1 = require("@nestjs/common");
let TransactionsRepository = class TransactionsRepository {
    _transactions = [];
    save(transaction) {
        if (!transaction.id) {
            transaction.id = Math.random().toString(36).substring(7);
        }
        this._transactions.push(transaction);
        return transaction;
    }
    findAll() {
        return [...this._transactions];
    }
    findById(id) {
        return this._transactions.find((t) => t.id === id);
    }
    delete(id) {
        const index = this._transactions.findIndex((t) => t.id === id);
        if (index === -1) {
            return false;
        }
        this._transactions.splice(index, 1);
        return true;
    }
};
exports.TransactionsRepository = TransactionsRepository;
exports.TransactionsRepository = TransactionsRepository = __decorate([
    (0, common_1.Injectable)()
], TransactionsRepository);
//# sourceMappingURL=transactions.repository.js.map