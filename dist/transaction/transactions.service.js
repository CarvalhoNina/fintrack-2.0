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
exports.TransactionsService = void 0;
const common_1 = require("@nestjs/common");
const transactions_repository_1 = require("./transactions.repository");
const transaction_entity_1 = require("./transaction.entity");
let TransactionsService = class TransactionsService {
    _repository;
    constructor(_repository) {
        this._repository = _repository;
    }
    findAll() {
        return this._repository.findAll();
    }
    findOne(id) {
        return this._repository.findById(id) || null;
    }
    create(description, amount) {
        let label = 'General';
        const descLower = description.toLowerCase();
        if (descLower.includes('tim hortons') || descLower.includes('starbucks')) {
            label = 'Coffee ☕';
        }
        else if (descLower.includes('walmart') ||
            descLower.includes('no frills')) {
            label = 'Groceries 🛒';
        }
        const newTransaction = new transaction_entity_1.Transaction({
            description,
            amount,
            label,
            currency: 'CAD',
        });
        return this._repository.save(newTransaction);
    }
    update(id, data) {
        const transaction = this.findOne(id);
        if (!transaction)
            return null;
        Object.assign(transaction, data);
        return transaction;
    }
    remove(id) {
        return this._repository.delete(id);
    }
};
exports.TransactionsService = TransactionsService;
exports.TransactionsService = TransactionsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [transactions_repository_1.TransactionsRepository])
], TransactionsService);
//# sourceMappingURL=transactions.service.js.map