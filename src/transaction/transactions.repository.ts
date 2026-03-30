import { Injectable } from '@nestjs/common';
import { Transaction, TransactionDocument } from './transaction.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { CreateTransactionDto } from './DTO/create-transaction.dto';
import { UpdateTransactionDto } from './DTO/update-transaction.dto';

@Injectable()
export class TransactionsRepository {
  constructor(
    @InjectModel(Transaction.name)
    private readonly _transactionModel: Model<TransactionDocument>,
  ) {}

  async save(dto: CreateTransactionDto): Promise<TransactionDocument> {
    const createdTransaction = new this._transactionModel(dto);
    return await createdTransaction.save();
  }

  async findAll(): Promise<Transaction[]> {
    return await this._transactionModel
      .find()
      .populate('user category originator account')
      .exec();
  }

  async findById(id: string): Promise<TransactionDocument | null> {
    return await this._transactionModel
      .findById(id)
      .populate('user category originator account')
      .exec();
  }

  async update(
    id: string,
    dto: UpdateTransactionDto,
  ): Promise<TransactionDocument | null> {
    return await this._transactionModel
      .findByIdAndUpdate(id, dto, { new: true })
      .populate('user category originator account')
      .exec();
  }

  async delete(id: string): Promise<boolean> {
    const result = await this._transactionModel.findByIdAndDelete(id).exec();
    return !!result;
  }
}
