import { Injectable } from '@nestjs/common';
import { UsersRepository } from './users.repository';
import { User } from './user.entity';

@Injectable()
export class UsersService {
  constructor(private readonly _usersRepository: UsersRepository) {}

  findAll(): User[] {
    return this._usersRepository.findAll();
  }

  findOne(id: string): User | null {
    const user = this._usersRepository.findById(id);

    if (!user) {
      return null;
    }

    return user;
  }

  create(
    firstName: string,
    lastName: string,
    email: string,
    address: string,
    password: string,
  ): User {
    const newUser = new User({
      firstName,
      lastName,
      email: email.toLowerCase(),
      address,
      password,
    });

    return this._usersRepository.save(newUser);
  }

  remove(id: string): boolean {
    const user = this._usersRepository.findById(id);

    if (!user) {
      return false;
    }

    return this._usersRepository.delete(id);
  }

  update(id: string, data: Partial<User>): User | null {
    const user = this.findOne(id);

    if (!user) {
      return null;
    }

    Object.assign(user, data);

    return this._usersRepository.save(user);
  }
}
