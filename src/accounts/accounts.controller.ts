import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Patch,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { AccountsService } from './accounts.service';
import { Account } from './accounts.schema';
import { CreateAccountDto } from './DTO/create-account.dto';
import { UpdateAccountDto } from './DTO/update-account.dto';
import { AuthGuard } from '@nestjs/passport';

@Controller('accounts')
@UseGuards(AuthGuard('jwt'))
export class AccountsController {
  constructor(private readonly _accountsService: AccountsService) {}

  @Get()
  async findAll(): Promise<Account[]> {
    return await this._accountsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Account | null> {
    return await this._accountsService.findOne(id);
  }

  @Post()
  async create(@Body() createAccountDto: CreateAccountDto): Promise<Account> {
    return await this._accountsService.create(createAccountDto);
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateAccountDto: UpdateAccountDto,
  ): Promise<Account> {
    return await this._accountsService.update(id, updateAccountDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<boolean> {
    return await this._accountsService.remove(id);
  }
}
