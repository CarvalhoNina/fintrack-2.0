import { Injectable } from '@nestjs/common';
import { ClientsRepository } from './clients.repository';
import { Client } from './client.entity';

@Injectable()
export class ClientsService {
  constructor(private readonly _repository: ClientsRepository) {}

  findAll(): Client[] {
    return this._repository.findAll();
  }

  findOne(id: string): Client | null {
    const client = this._repository.findById(id);

    if (!client) {
      return null;
    }

    return client;
  }

  create(
    firstName: string,
    lastName: string,
    address: string,
    email: string,
    password: string,
  ): Client {
    const newClient = new Client({
      firstName,
      lastName,
      email: email.toLowerCase(),
      address,
      password,
    });

    return this._repository.save(newClient);
  }

  remove(id: string): boolean {
    const client = this._repository.findById(id);

    if (!client) {
      return false;
    }

    return this._repository.delete(id);
  }

  update(id: string, data: Partial<Client>): Client | null {
    const client = this.findOne(id);

    if (!client) {
      return null;
    }

    Object.assign(client, data);

    return this._repository.save(client);
  }
}
