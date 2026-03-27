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
exports.AccountsRepository = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const accounts_schema_1 = require("./accounts.schema");
let AccountsRepository = class AccountsRepository {
    _accountModel;
    constructor(_accountModel) {
        this._accountModel = _accountModel;
    }
    async save(dto) {
        const createdAccount = new this._accountModel(dto);
        return await createdAccount.save();
    }
    async findAll() {
        return await this._accountModel.find().exec();
    }
    async findById(id) {
        return await this._accountModel.findById(id).exec();
    }
    async update(id, dto) {
        return await this._accountModel
            .findByIdAndUpdate(id, dto, { new: true })
            .exec();
    }
    async delete(id) {
        const result = await this._accountModel.findByIdAndDelete(id).exec();
        return !!result;
    }
};
exports.AccountsRepository = AccountsRepository;
exports.AccountsRepository = AccountsRepository = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(accounts_schema_1.Account.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], AccountsRepository);
//# sourceMappingURL=accounts.repository.js.map