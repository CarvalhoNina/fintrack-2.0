import { Injectable } from '@nestjs/common';
import { Client } from './client.entity';

@Injectable()
export class ClientsRepository {
  private readonly _clients: Client[] = [];

  save(client: Client): Client {
    if (!client.id) {
      client.id = Math.random().toString(36).substring(7);
    }

    this._clients.push(client);
    return client;
  }

  findAll(): Client[] {
    return [...this._clients];
  }

  findById(id: string): Client | undefined {
    return this._clients.find((t) => t.id === id);
  }

  delete(id: string): boolean {
    const index = this._clients.findIndex((client) => client.id === id);

    if (index === -1) {
      return false;
    }

    this._clients.splice(index, 1);

    return true;
  }
}
