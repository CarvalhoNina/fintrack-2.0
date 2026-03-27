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
exports.OriginatorsRepository = void 0;
const common_1 = require("@nestjs/common");
const originator_schema_1 = require("./originator.schema");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let OriginatorsRepository = class OriginatorsRepository {
    _originatorModel;
    constructor(_originatorModel) {
        this._originatorModel = _originatorModel;
    }
    async save(dto) {
        const createdOriginator = new this._originatorModel(dto);
        return await createdOriginator.save();
    }
    async findAll() {
        return await this._originatorModel.find().populate('category').exec();
    }
    async findById(id) {
        return await this._originatorModel.findById(id).populate('category').exec();
    }
    async update(id, dto) {
        return await this._originatorModel
            .findByIdAndUpdate(id, dto, { new: true })
            .populate('category')
            .exec();
    }
    async delete(id) {
        const result = await this._originatorModel.findByIdAndDelete(id).exec();
        return !!result;
    }
};
exports.OriginatorsRepository = OriginatorsRepository;
exports.OriginatorsRepository = OriginatorsRepository = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(originator_schema_1.Originator.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], OriginatorsRepository);
//# sourceMappingURL=originators.repository.js.map