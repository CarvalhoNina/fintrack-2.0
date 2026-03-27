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
exports.OriginatorsController = void 0;
const common_1 = require("@nestjs/common");
const create_originator_dto_js_1 = require("./DTO/create-originator.dto.js");
const update_originator_dto_js_1 = require("./DTO/update-originator.dto.js");
const originators_service_js_1 = require("./originators.service.js");
let OriginatorsController = class OriginatorsController {
    _originatorsService;
    constructor(_originatorsService) {
        this._originatorsService = _originatorsService;
    }
    async findAll() {
        return await this._originatorsService.findAll();
    }
    async findOne(id) {
        return await this._originatorsService.findOne(id);
    }
    async create(createOriginatorDTO) {
        return await this._originatorsService.create(createOriginatorDTO);
    }
    async update(id, updateOriginatorDTO) {
        return await this._originatorsService.update(id, updateOriginatorDTO);
    }
    async remove(id) {
        return await this._originatorsService.remove(id);
    }
};
exports.OriginatorsController = OriginatorsController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], OriginatorsController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], OriginatorsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_originator_dto_js_1.CreateOriginatorDto]),
    __metadata("design:returntype", Promise)
], OriginatorsController.prototype, "create", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_originator_dto_js_1.UpdateOriginatorDto]),
    __metadata("design:returntype", Promise)
], OriginatorsController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], OriginatorsController.prototype, "remove", null);
exports.OriginatorsController = OriginatorsController = __decorate([
    (0, common_1.Controller)('originator'),
    __metadata("design:paramtypes", [originators_service_js_1.OriginatorsService])
], OriginatorsController);
//# sourceMappingURL=originators.controller.js.map