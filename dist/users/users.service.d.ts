import { ClientsRepository } from './users.repository';
import { Client } from './user.entity';
export declare class ClientsService {
    private readonly _repository;
    constructor(_repository: ClientsRepository);
    findAll(): Client[];
    findOne(id: string): Client | null;
    create(firstName: string, lastName: string, address: string, email: string, password: string): Client;
    remove(id: string): boolean;
    update(id: string, data: Partial<Client>): Client | null;
}
