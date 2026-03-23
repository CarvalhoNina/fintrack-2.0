import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Patch,
  Delete,
} from '@nestjs/common';
import { TransactionsService } from './transactions.service';
import { Transaction } from './transaction.entity';

@Controller('transactions')
export class TransactionsController {
  constructor(private readonly _service: TransactionsService) {}

  @Get()
  findAll(): Transaction[] {
    return this._service.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Transaction | null {
    return this._service.findOne(id);
  }

  @Post()
  create(
    @Body('amount') amount: number,
    @Body('originatorId') originatorId: string,
    @Body('accountId') accountId: string,
    @Body('categoryId') categoryId: string,
  ): Transaction {
    return this._service.create(amount, originatorId, accountId, categoryId);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() data: Partial<Transaction>,
  ): Transaction | null {
    return this._service.update(id, data);
  }

  @Delete(':id')
  remove(@Param('id') id: string): boolean {
    return this._service.remove(id);
  }
}
