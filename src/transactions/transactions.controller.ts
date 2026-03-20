import { Controller, Get, Post, Body, Param } from '@nestjs/common'; // <-- ADICIONE 'Param' AQUI
import { TransactionsService } from './transactions.service';
import { Transaction } from './transaction.entity';

@Controller('transactions')
export class TransactionsController {
  constructor(private readonly _service: TransactionsService) {}

  @Get()
  listarTodas(): Transaction[] {
    return this._service.findAll();
  }

  @Get(':id')
  buscarPorId(@Param('id') id: string): Transaction | null {
    return this._service.findOne(id); // O erro vai sumir assim que atualizarmos o Service abaixo
  }

  @Post()
  createNew(
    @Body('description') description: string,
    @Body('amount') amount: number,
  ): Transaction {
    return this._service.create(description, amount);
  }
}
