import { TransactionsService } from './transactions.service';
import { CreateTransactionDto } from './DTO/create-transaction.dto';
import { UpdateTransactionDto } from './DTO/update-transaction.dto';
import { Transaction } from './transaction.schema';
export declare class TransactionsController {
    private readonly _transactionsService;
    constructor(_transactionsService: TransactionsService);
    create(createTransactionDto: CreateTransactionDto): Promise<Transaction>;
    findAll(): Promise<Transaction[]>;
    findOne(id: string): Promise<Transaction | null>;
    update(id: string, updateTransactionDto: UpdateTransactionDto): Promise<Transaction | null>;
    remove(id: string): Promise<boolean>;
}
