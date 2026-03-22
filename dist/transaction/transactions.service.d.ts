import { TransactionsRepository } from './transactions.repository';
import { Transaction } from './transaction.entity';
export declare class TransactionsService {
    private readonly _repository;
    constructor(_repository: TransactionsRepository);
    findAll(): Transaction[];
    findOne(id: string): Transaction | null;
    create(description: string, amount: number): Transaction;
    update(id: string, data: Partial<Transaction>): Transaction | null;
    remove(id: string): boolean;
}
