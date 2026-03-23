import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Patch,
  Delete,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './user.entity';
import { CreateUserDto } from './DTO/create-user.dto';
import { UpdateUserDto } from './DTO/update-user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly _usersService: UsersService) {}

  @Get()
  findAll(): User[] {
    return this._usersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): User | null {
    return this._usersService.findOne(id);
  }

  @Post()
  create(@Body() createUserDTO: CreateUserDto): User {
    return this._usersService.create(createUserDTO);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() dto: UpdateUserDto): User | null {
    return this._usersService.update(id, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string): boolean {
    return this._usersService.remove(id);
  }
}
