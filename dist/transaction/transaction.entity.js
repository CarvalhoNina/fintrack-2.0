"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Transaction = void 0;
class Transaction {
    id;
    description;
    amount;
    currency;
    label;
    date;
    constructor(partial) {
        Object.assign(this, partial);
        this.date = this.date || new Date();
    }
}
exports.Transaction = Transaction;
//# sourceMappingURL=transaction.entity.js.map