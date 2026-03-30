"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionModule = void 0;
const common_1 = require("@nestjs/common");
const transactions_controller_1 = require("./transactions.controller");
const transactions_service_1 = require("./transactions.service");
const transactions_repository_1 = require("./transactions.repository");
const originator_module_1 = require("../originator/originator.module");
const accounts_module_1 = require("../accounts/accounts.module");
const categories_module_1 = require("../categories/categories.module");
const mongoose_1 = require("@nestjs/mongoose");
const transaction_schema_1 = require("./transaction.schema");
const users_module_1 = require("../users/users.module");
let TransactionModule = class TransactionModule {
};
exports.TransactionModule = TransactionModule;
exports.TransactionModule = TransactionModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([
                { name: transaction_schema_1.Transaction.name, schema: transaction_schema_1.TransactionSchema },
            ]),
            categories_module_1.CategoriesModule,
            accounts_module_1.AccountsModule,
            originator_module_1.OriginatorsModule,
            users_module_1.UsersModule,
        ],
        controllers: [transactions_controller_1.TransactionsController],
        providers: [transactions_service_1.TransactionsService, transactions_repository_1.TransactionsRepository],
        exports: [transactions_service_1.TransactionsService, transactions_repository_1.TransactionsRepository],
    })
], TransactionModule);
//# sourceMappingURL=transaction.module.js.map