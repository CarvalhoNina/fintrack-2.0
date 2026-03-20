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
import { Account, AccountType, Currency } from './account.entity';

@Controller('accounts')
export class AccountsController {
  constructor(private readonly _service: AccountsService) {}

  @Get()
  findAll(): Account[] {
    return this._service.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Account | null {
    return this._service.findOne(id);
  }

  @Post()
  create(
    @Body('clientId') clientId: string,
    @Body('bankName') bankName: string,
    @Body('type') type: AccountType,
    @Body('currency') currency: Currency,
    @Body('balance') balance?: number,
  ): Account {
    return this._service.create(clientId, bankName, type, currency, balance);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() data: Partial<Account>,
  ): Account | null {
    return this._service.update(id, data);
  }

  @Delete(':id')
  remove(@Param('id') id: string): boolean {
    return this._service.remove(id);
  }
}
