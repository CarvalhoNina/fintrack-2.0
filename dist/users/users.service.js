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
exports.ClientsService = void 0;
const common_1 = require("@nestjs/common");
const users_repository_1 = require("./users.repository");
const user_entity_1 = require("./user.entity");
let ClientsService = class ClientsService {
    _repository;
    constructor(_repository) {
        this._repository = _repository;
    }
    findAll() {
        return this._repository.findAll();
    }
    findOne(id) {
        const client = this._repository.findById(id);
        if (!client) {
            return null;
        }
        return client;
    }
    create(firstName, lastName, address, email, password) {
        const newClient = new user_entity_1.Client({
            firstName,
            lastName,
            email: email.toLowerCase(),
            address,
            password,
        });
        return this._repository.save(newClient);
    }
    remove(id) {
        const client = this._repository.findById(id);
        if (!client) {
            return false;
        }
        return this._repository.delete(id);
    }
    update(id, data) {
        const client = this.findOne(id);
        if (!client) {
            return null;
        }
        Object.assign(client, data);
        return this._repository.save(client);
    }
};
exports.ClientsService = ClientsService;
exports.ClientsService = ClientsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [users_repository_1.ClientsRepository])
], ClientsService);
//# sourceMappingURL=users.service.js.map