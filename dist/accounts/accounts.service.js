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
let AccountsService = class AccountsService {
    _accountsRepository;
    constructor(_accountsRepository) {
        this._accountsRepository = _accountsRepository;
    }
    async findAll() {
        return await this._accountsRepository.findAll();
    }
    async findOne(id) {
        const account = await this._accountsRepository.findById(id);
        if (!account) {
            throw new common_1.NotFoundException(`Conta com ID ${id} não encontrada`);
        }
        return account;
    }
    async create(dto) {
        return await this._accountsRepository.save(dto);
    }
    async update(id, dto) {
        await this.findOne(id);
        const updatedAccount = await this._accountsRepository.update(id, dto);
        if (!updatedAccount) {
            throw new common_1.NotFoundException(`Erro ao atualizar a conta com ID ${id}`);
        }
        return updatedAccount;
    }
    async remove(id) {
        await this.findOne(id);
        return await this._accountsRepository.delete(id);
    }
};
exports.AccountsService = AccountsService;
exports.AccountsService = AccountsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [accounts_repository_1.AccountsRepository])
], AccountsService);
//# sourceMappingURL=accounts.service.js.map