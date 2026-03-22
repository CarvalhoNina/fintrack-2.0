import { ClientsService } from './users.service';
import { Client } from './user.entity';
export declare class ClientsController {
    private readonly _service;
    constructor(_service: ClientsService);
    findAll(): Client[];
    findOne(id: string): Client | null;
    create(firstName: string, lastName: string, email: string, address: string, password: string): Client;
    update(id: string, data: Partial<Client>): Client | null;
    remove(id: string): boolean;
}
