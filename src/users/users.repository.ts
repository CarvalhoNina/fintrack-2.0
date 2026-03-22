import { Injectable } from '@nestjs/common';
import { User } from './user.entity';

@Injectable()
export class UsersRepository {
  private readonly _users: User[] = [];

  save(user: User): User {
    if (!user.id) {
      user.id = Math.random().toString(36).substring(7);
    }

    this._users.push(user);
    return user;
  }

  findAll(): User[] {
    return [...this._users];
  }

  findById(id: string): User | undefined {
    return this._users.find((t) => t.id === id);
  }

  delete(id: string): boolean {
    const index = this._users.findIndex((user) => user.id === id);

    if (index === -1) {
      return false;
    }

    this._users.splice(index, 1);

    return true;
  }
}
