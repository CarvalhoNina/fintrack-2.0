import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Patch,
  Delete,
} from '@nestjs/common';
import { AccountsService } from './accounts.service';
import { Account } from './account.entity';
import { CreateAccountDto } from './DTO/create-account.dto';
import { UpdateAccountDto } from './DTO/update-account.dto';

@Controller('accounts')
export class AccountsController {
  constructor(private readonly _accountsService: AccountsService) {}

  @Get()
  findAll(): Account[] {
    return this._accountsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Account | null {
    return this._accountsService.findOne(id);
  }

  @Post()
  create(@Body() createAccountDto: CreateAccountDto): Account {
    return this._accountsService.create(createAccountDto);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateAccountDto: UpdateAccountDto,
  ): Account {
    return this._accountsService.update(id, updateAccountDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string): boolean {
    return this._accountsService.remove(id);
  }
}
