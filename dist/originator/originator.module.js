"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OriginatorsModule = void 0;
const common_1 = require("@nestjs/common");
const originators_service_1 = require("./originators.service");
const originators_repository_1 = require("./originators.repository");
const originators_controller_1 = require("./originators.controller");
const mongoose_1 = require("@nestjs/mongoose");
const originator_schema_1 = require("./originator.schema");
const categories_module_1 = require("../categories/categories.module");
let OriginatorsModule = class OriginatorsModule {
};
exports.OriginatorsModule = OriginatorsModule;
exports.OriginatorsModule = OriginatorsModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([
                { name: originator_schema_1.Originator.name, schema: originator_schema_1.OriginatorSchema },
            ]),
            categories_module_1.CategoriesModule,
        ],
        controllers: [originators_controller_1.OriginatorsController],
        providers: [originators_service_1.OriginatorsService, originators_repository_1.OriginatorsRepository],
        exports: [originators_service_1.OriginatorsService, originators_repository_1.OriginatorsRepository],
    })
], OriginatorsModule);
//# sourceMappingURL=originator.module.js.map