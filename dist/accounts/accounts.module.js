"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccountsModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const accounts_service_1 = require("./accounts.service");
const accounts_controller_1 = require("./accounts.controller");
const accounts_repository_1 = require("./accounts.repository");
const accounts_schema_1 = require("./accounts.schema");
let AccountsModule = class AccountsModule {
};
exports.AccountsModule = AccountsModule;
exports.AccountsModule = AccountsModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([{ name: accounts_schema_1.Account.name, schema: accounts_schema_1.AccountSchema }]),
        ],
        providers: [accounts_service_1.AccountsService, accounts_repository_1.AccountsRepository],
        controllers: [accounts_controller_1.AccountsController],
        exports: [accounts_service_1.AccountsService, accounts_repository_1.AccountsRepository],
    })
], AccountsModule);
//# sourceMappingURL=accounts.module.js.map