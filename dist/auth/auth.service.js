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
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const users_service_1 = require("../users/users.service");
const bcrypt = require("bcrypt");
const jwt_1 = require("@nestjs/jwt");
let AuthService = class AuthService {
    _usersService;
    _jwtService;
    constructor(_usersService, _jwtService) {
        this._usersService = _usersService;
        this._jwtService = _jwtService;
    }
    async validateUser(email, pass) {
        const user = await this._usersService.findByEmail(email);
        if (user) {
            const isMatch = await bcrypt.compare(pass, user.password);
            if (isMatch) {
                const userObject = user.toObject();
                const { password: _, ...result } = userObject;
                return result;
            }
        }
        throw new common_1.UnauthorizedException('E-mail ou senha incorretos.');
    }
    login(user) {
        const payload = {
            email: user.email,
            sub: user._id.toString(),
        };
        return {
            access_token: this._jwtService.sign(payload),
        };
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [users_service_1.UsersService,
        jwt_1.JwtService])
], AuthService);
//# sourceMappingURL=auth.service.js.map