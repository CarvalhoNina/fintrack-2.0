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
exports.CategorySchema = exports.Category = exports.CategorySubtype = exports.CategoryType = void 0;
const mongoose_1 = require("@nestjs/mongoose");
var CategoryType;
(function (CategoryType) {
    CategoryType["INCOME"] = "income";
    CategoryType["EXPENSE"] = "expense";
})(CategoryType || (exports.CategoryType = CategoryType = {}));
var CategorySubtype;
(function (CategorySubtype) {
    CategorySubtype["SALARY"] = "salary";
    CategorySubtype["INVESTMENT"] = "investment";
    CategorySubtype["GIFT"] = "gift";
    CategorySubtype["REWARDS"] = "rewards";
    CategorySubtype["OTHER_INCOME"] = "other_income";
    CategorySubtype["HOUSING"] = "housing";
    CategorySubtype["TRANSPORT"] = "transport";
    CategorySubtype["FOOD"] = "food";
    CategorySubtype["LEISURE"] = "leisure";
    CategorySubtype["HEALTH"] = "health";
    CategorySubtype["EDUCATION"] = "education";
    CategorySubtype["PERSONAL_CARE"] = "personal_care";
    CategorySubtype["OTHER_EXPENSE"] = "other_expense";
})(CategorySubtype || (exports.CategorySubtype = CategorySubtype = {}));
let Category = class Category {
    type;
    subtype;
};
exports.Category = Category;
__decorate([
    (0, mongoose_1.Prop)({ required: true, enum: CategoryType }),
    __metadata("design:type", String)
], Category.prototype, "type", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, enum: CategorySubtype }),
    __metadata("design:type", String)
], Category.prototype, "subtype", void 0);
exports.Category = Category = __decorate([
    (0, mongoose_1.Schema)({ timestamps: true })
], Category);
exports.CategorySchema = mongoose_1.SchemaFactory.createForClass(Category);
//# sourceMappingURL=categories.schema.js.map