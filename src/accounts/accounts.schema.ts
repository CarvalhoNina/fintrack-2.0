import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export enum Currency {
  BRL = 'BRL',
  CAD = 'CAD',
  USD = 'USD',
  EUR = 'EUR',
}

export enum AccountType {
  CHECKING = 'checking',
  SAVINGS = 'savings',
  CREDIT = 'credit',
}

export type AccountDocument = HydratedDocument<Account>;

@Schema({ timestamps: true })
export class Account {
  @Prop({ required: true })
  clientId: string;

  @Prop({ required: true })
  bankName: string;

  @Prop({ required: true, enum: AccountType })
  type: AccountType;

  @Prop({ default: 0 })
  balance: number;

  @Prop({ required: true, enum: Currency })
  currency: Currency;
}

export const AccountSchema = SchemaFactory.createForClass(Account);
