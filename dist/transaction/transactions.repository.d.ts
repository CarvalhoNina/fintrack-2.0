import { Transaction, TransactionDocument } from './transaction.schema';
import { Model } from 'mongoose';
import { CreateTransactionDto } from './DTO/create-transaction.dto';
import { UpdateTransactionDto } from './DTO/update-transaction.dto';
export declare class TransactionsRepository {
    private readonly _transactionModel;
    constructor(_transactionModel: Model<TransactionDocument>);
    save(dto: CreateTransactionDto): Promise<TransactionDocument>;
    findAll(): Promise<Transaction[]>;
    findById(id: string): Promise<Transaction | null>;
    update(id: string, dto: UpdateTransactionDto): Promise<TransactionDocument | null>;
    delete(id: string): Promise<boolean>;
}
