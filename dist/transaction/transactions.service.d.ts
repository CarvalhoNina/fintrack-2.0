import { TransactionsRepository } from './transactions.repository';
import { OriginatorsRepository } from 'src/originator/originators.repository';
import { AccountsRepository } from 'src/accounts/accounts.repository';
import { CategoriesRepository } from 'src/categories/categories.repository';
import { CreateTransactionDto } from './DTO/create-transaction.dto';
import { UpdateTransactionDto } from './DTO/update-transaction.dto';
import { Transaction } from './transaction.schema';
import { UsersRepository } from 'src/users/users.repository';
export declare class TransactionsService {
    private readonly _transactionsRepository;
    private readonly _originatorsRepository;
    private readonly _accountsRepository;
    private readonly _categoryRepository;
    private readonly _usersRepository;
    constructor(_transactionsRepository: TransactionsRepository, _originatorsRepository: OriginatorsRepository, _accountsRepository: AccountsRepository, _categoryRepository: CategoriesRepository, _usersRepository: UsersRepository);
    create(dto: CreateTransactionDto): Promise<Transaction>;
    findAll(): Promise<Transaction[]>;
    findOne(id: string): Promise<Transaction | null>;
    update(id: string, dto: UpdateTransactionDto): Promise<Transaction | null>;
    remove(id: string): Promise<boolean>;
}
