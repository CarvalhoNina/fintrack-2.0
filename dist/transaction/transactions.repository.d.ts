import { Transaction } from './transaction.entity';
export declare class TransactionsRepository {
    private readonly _transactions;
    save(transaction: Transaction): Transaction;
    findAll(): Transaction[];
    findById(id: string): Transaction | undefined;
    delete(id: string): boolean;
}
