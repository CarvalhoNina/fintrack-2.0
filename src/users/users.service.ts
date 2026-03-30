import { Injectable, NotFoundException } from '@nestjs/common';
import { UsersRepository } from './users.repository';
import { CreateUserDto } from './DTO/create-user.dto';
import { UserDocument } from './user.schema';
import * as bcrypt from 'bcrypt';
import { UpdateUserDto } from './DTO/update-user.dto';

@Injectable()
export class UsersService {
  constructor(private readonly _usersRepository: UsersRepository) {}

  async create(dto: CreateUserDto): Promise<UserDocument> {
    const salt = await bcrypt.genSalt();

    const hashedPassword = await bcrypt.hash(dto.password, salt);

    const userToSave = {
      ...dto,
      password: hashedPassword,
    };

    return await this._usersRepository.save(userToSave);
  }

  async findAll(): Promise<UserDocument[]> {
    return await this._usersRepository.findAll();
  }

  async findOne(id: string): Promise<UserDocument> {
    const user = await this._usersRepository.findById(id);
    if (!user) {
      throw new NotFoundException('Usuário não encontrado.');
    }
    return user;
  }

  async findByEmail(email: string): Promise<UserDocument | null> {
    return await this._usersRepository.findByEmail(email);
  }

  async update(id: string, dto: UpdateUserDto): Promise<UserDocument> {
    await this.findOne(id);

    if (dto.password) {
      const salt = await bcrypt.genSalt();
      dto.password = await bcrypt.hash(dto.password, salt);
    }

    const updatedUser = await this._usersRepository.update(id, dto);
    if (!updatedUser) {
      throw new Error('Erro ao atualizar usuário.');
    }
    return updatedUser;
  }

  async remove(id: string): Promise<boolean> {
    await this.findOne(id);

    return await this._usersRepository.delete(id);
  }
}
