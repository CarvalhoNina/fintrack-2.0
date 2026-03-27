import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Types } from 'mongoose';
import { Account } from 'src/accounts/accounts.schema';
import { Category } from 'src/categories/categories.schema';
import { Originator } from 'src/originator/originator.schema';

export type TransactionDocument = HydratedDocument<Transaction>;

@Schema({ timestamps: true })
export class Transaction {
  @Prop({ required: true })
  amount: number;

  @Prop({ type: Date, required: true })
  date: Date;

  @Prop({
    type: Types.ObjectId,
    ref: 'Originator',
    required: true,
  })
  originator: Originator;

  @Prop({
    type: Types.ObjectId,
    ref: 'Account',
    required: true,
  })
  account: Account;

  @Prop({
    type: Types.ObjectId,
    ref: 'Category',
    required: true,
  })
  category: Category;
}

export const TransactionSchema = SchemaFactory.createForClass(Transaction);
