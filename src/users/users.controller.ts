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
  create(
    @Body('firstName') firstName: string,
    @Body('lastName') lastName: string,
    @Body('email') email: string,
    @Body('address') address: string,
    @Body('password') password: string,
  ): User {
    return this._usersService.create(
      firstName,
      lastName,
      email,
      address,
      password,
    );
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() data: Partial<User>): User | null {
    return this._usersService.update(id, data);
  }

  @Delete(':id')
  remove(@Param('id') id: string): boolean {
    return this._usersService.remove(id);
  }
}
