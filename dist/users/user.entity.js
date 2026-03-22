"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Client = void 0;
class Client {
    id;
    firstName;
    lastName;
    email;
    address;
    password;
    constructor(partial) {
        Object.assign(this, partial);
    }
}
exports.Client = Client;
//# sourceMappingURL=user.entity.js.map