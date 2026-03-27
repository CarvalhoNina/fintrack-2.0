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
exports.OriginatorsService = void 0;
const common_1 = require("@nestjs/common");
const originators_repository_1 = require("./originators.repository");
const categories_repository_1 = require("../categories/categories.repository");
let OriginatorsService = class OriginatorsService {
    _originatorsRepository;
    _categoriesRepository;
    constructor(_originatorsRepository, _categoriesRepository) {
        this._originatorsRepository = _originatorsRepository;
        this._categoriesRepository = _categoriesRepository;
    }
    async findAll() {
        return await this._originatorsRepository.findAll();
    }
    async findOne(id) {
        const originator = await this._originatorsRepository.findById(id);
        if (!originator) {
            throw new common_1.NotFoundException(`Originator com ID ${id} não encontrado`);
        }
        return originator;
    }
    async create(dto) {
        const category = await this._categoriesRepository.findById(dto.categoryId);
        if (!category) {
            throw new common_1.NotFoundException(`A categoria informada não existe`);
        }
        return await this._originatorsRepository.save(dto);
    }
    async update(id, dto) {
        await this.findOne(id);
        const newCategoryIdProvided = dto.categoryId;
        if (newCategoryIdProvided) {
            const categoryFoundInDb = await this._categoriesRepository.findById(newCategoryIdProvided);
            const categoryExists = categoryFoundInDb !== null;
            if (!categoryExists) {
                throw new common_1.NotFoundException(`Update cancelled: The category ID '${newCategoryIdProvided}' was not found in the system.`);
            }
        }
        return await this._originatorsRepository.update(id, dto);
    }
    async remove(id) {
        await this.findOne(id);
        return this._originatorsRepository.delete(id);
    }
};
exports.OriginatorsService = OriginatorsService;
exports.OriginatorsService = OriginatorsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [originators_repository_1.OriginatorsRepository,
        categories_repository_1.CategoriesRepository])
], OriginatorsService);
//# sourceMappingURL=originators.service.js.map