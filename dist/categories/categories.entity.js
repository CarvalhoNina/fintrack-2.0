"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Category = exports.CategorySubtype = exports.CategoryType = void 0;
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
class Category {
    id;
    type;
    subtype;
    constructor(partial) {
        Object.assign(this, partial);
        this.type = this.type || CategoryType.EXPENSE;
        this.subtype = this.subtype || CategorySubtype.OTHER_EXPENSE;
    }
}
exports.Category = Category;
//# sourceMappingURL=categories.entity.js.map