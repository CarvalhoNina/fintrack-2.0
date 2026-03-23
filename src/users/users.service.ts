import { Injectable } from '@nestjs/common';
import { UsersRepository } from './users.repository';
import { User } from './user.entity';
import { CreateUserDto } from './DTO/create-user.dto';
import { UpdateUserDto } from './DTO/update-user.dto';

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

  create(dto: CreateUserDto): User {
    const newUser = new User({
      ...dto,
    });

    return this._usersRepository.save(newUser);
  }

  update(id: string, dto: UpdateUserDto): User | null {
    const user = this.findOne(id);

    if (!user) {
      return null;
    }

    Object.assign(user, dto);

    return this._usersRepository.save(user);
  }

  remove(id: string): boolean {
    const user = this._usersRepository.findById(id);

    if (!user) {
      return false;
    }

    return this._usersRepository.delete(id);
  }
}
