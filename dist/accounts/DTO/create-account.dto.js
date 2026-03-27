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
exports.CreateAccountDto = void 0;
const class_validator_1 = require("class-validator");
const accounts_schema_1 = require("../accounts.schema");
class CreateAccountDto {
    clientId;
    bankName;
    type;
    currency;
    balance;
}
exports.CreateAccountDto = CreateAccountDto;
__decorate([
    (0, class_validator_1.IsMongoId)({ message: 'O ID do originator deve ser um ID válido do MongoDB' }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateAccountDto.prototype, "clientId", void 0);
__decorate([
    (0, class_validator_1.IsString)({ message: 'O nome do banco deve ser um texto' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'O nome do banco é obrigatório' }),
    __metadata("design:type", String)
], CreateAccountDto.prototype, "bankName", void 0);
__decorate([
    (0, class_validator_1.IsEnum)(accounts_schema_1.AccountType, {
        message: 'O tipo de conta deve ser: checking, savings ou credit',
    }),
    __metadata("design:type", String)
], CreateAccountDto.prototype, "type", void 0);
__decorate([
    (0, class_validator_1.IsEnum)(accounts_schema_1.Currency, {
        message: 'A moeda deve ser: BRL, CAD, USD ou EUR',
    }),
    __metadata("design:type", String)
], CreateAccountDto.prototype, "currency", void 0);
__decorate([
    (0, class_validator_1.IsNumber)({}, { message: 'O saldo deve ser um número' }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], CreateAccountDto.prototype, "balance", void 0);
//# sourceMappingURL=create-account.dto.js.map