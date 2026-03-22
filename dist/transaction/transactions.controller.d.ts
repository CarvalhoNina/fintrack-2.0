import { TransactionsService } from './transactions.service';
import { Transaction } from './transaction.entity';
export declare class TransactionsController {
    private readonly _service;
    constructor(_service: TransactionsService);
    findAll(): Transaction[];
    findOne(id: string): Transaction | null;
    create(description: string, amount: number): Transaction;
    update(id: string, data: Partial<Transaction>): Transaction | null;
    remove(id: string): boolean;
}
