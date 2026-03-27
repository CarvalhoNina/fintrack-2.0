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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionsRepository = void 0;
const common_1 = require("@nestjs/common");
const transaction_schema_1 = require("./transaction.schema");
const mongoose_1 = require("mongoose");
const mongoose_2 = require("@nestjs/mongoose");
let TransactionsRepository = class TransactionsRepository {
    _transactionModel;
    constructor(_transactionModel) {
        this._transactionModel = _transactionModel;
    }
    async save(dto) {
        const createdTransaction = new this._transactionModel(dto);
        return await createdTransaction.save();
    }
    async findAll() {
        return await this._transactionModel
            .find()
            .populate('category originator account')
            .exec();
    }
    async findById(id) {
        return await this._transactionModel.findById(id).exec();
    }
    async update(id, dto) {
        return await this._transactionModel
            .findByIdAndUpdate(id, dto, { new: true })
            .populate('category originator account')
            .exec();
    }
    async delete(id) {
        const result = await this._transactionModel.findByIdAndDelete(id).exec();
        return !!result;
    }
};
exports.TransactionsRepository = TransactionsRepository;
exports.TransactionsRepository = TransactionsRepository = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_2.InjectModel)(transaction_schema_1.Transaction.name)),
    __metadata("design:paramtypes", [mongoose_1.Model])
], TransactionsRepository);
//# sourceMappingURL=transactions.repository.js.map