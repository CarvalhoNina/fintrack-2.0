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
import { CreateTransactionDto } from './DTO/create-transaction.dto';
import { UpdateTransactionDto } from './DTO/update-transaction.dto';

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
  create(@Body() createTransactionDto: CreateTransactionDto): Transaction {
    return this._service.create(createTransactionDto);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateTransactionDto: UpdateTransactionDto,
  ): Transaction | null {
    return this._service.update(id, updateTransactionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string): boolean {
    return this._service.remove(id);
  }
}
