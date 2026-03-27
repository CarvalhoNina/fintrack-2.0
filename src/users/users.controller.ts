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
import { CreateUserDto } from './DTO/create-user.dto';
import { UpdateUserDto } from './DTO/update-user.dto';
import { UserDocument } from './user.schema';

@Controller('users')
export class UsersController {
  constructor(private readonly _usersService: UsersService) {}

  @Get()
  async findAll(): Promise<UserDocument[]> {
    return await this._usersService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<UserDocument | null> {
    return await this._usersService.findOne(id);
  }

  @Post()
  async create(@Body() createUserDTO: CreateUserDto): Promise<UserDocument> {
    return await this._usersService.create(createUserDTO);
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() dto: UpdateUserDto,
  ): Promise<UserDocument | null> {
    return await this._usersService.update(id, dto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<boolean> {
    return await this._usersService.remove(id);
  }
}
