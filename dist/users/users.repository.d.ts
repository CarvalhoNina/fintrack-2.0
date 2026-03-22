import { Client } from './user.entity';
export declare class ClientsRepository {
    private readonly _clients;
    save(client: Client): Client;
    findAll(): Client[];
    findById(id: string): Client | undefined;
    delete(id: string): boolean;
}
