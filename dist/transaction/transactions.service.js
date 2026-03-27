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
const originators_repository_1 = require("../originator/originators.repository");
const accounts_repository_1 = require("../accounts/accounts.repository");
const categories_repository_1 = require("../categories/categories.repository");
let TransactionsService = class TransactionsService {
    _transactionsRepository;
    _originatorsRepository;
    _accountsRepository;
    _categoryRepository;
    constructor(_transactionsRepository, _originatorsRepository, _accountsRepository, _categoryRepository) {
        this._transactionsRepository = _transactionsRepository;
        this._originatorsRepository = _originatorsRepository;
        this._accountsRepository = _accountsRepository;
        this._categoryRepository = _categoryRepository;
    }
    async findAll() {
        return await this._transactionsRepository.findAll();
    }
    async findOne(id) {
        return (await this._transactionsRepository.findById(id)) || null;
    }
    async create(dto) {
        const originator = await this._originatorsRepository.findById(dto.originatorId);
        if (!originator) {
            throw new common_1.NotFoundException('O Originator informado não existe.');
        }
        const account = await this._accountsRepository.findById(dto.accountId);
        if (!account) {
            throw new common_1.NotFoundException('A conta informada não existe.');
        }
        const category = await this._categoryRepository.findById(dto.categoryId);
        if (!category) {
            throw new common_1.NotFoundException('A categoria informada não existe.');
        }
        return await this._transactionsRepository.save(dto);
    }
    async update(id, dto) {
        const transaction = await this.findOne(id);
        if (!transaction) {
            throw new common_1.NotFoundException('Transação não encontrada.');
        }
        return await this._transactionsRepository.update(id, dto);
    }
    async remove(id) {
        return this._transactionsRepository.delete(id);
    }
};
exports.TransactionsService = TransactionsService;
exports.TransactionsService = TransactionsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [transactions_repository_1.TransactionsRepository,
        originators_repository_1.OriginatorsRepository,
        accounts_repository_1.AccountsRepository,
        categories_repository_1.CategoriesRepository])
], TransactionsService);
//# sourceMappingURL=transactions.service.js.map