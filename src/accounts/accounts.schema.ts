import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Types } from 'mongoose';
import { User } from 'src/users/user.schema';

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

export enum BankName {
  RBC = 'RBC',
  TD = 'TD',
  BMO = 'BMO',
  SCOTIA = 'Scotiabank',
  CIBC = 'CIBC',
  SANTANDER = 'Santander',
  NUBANK = 'Nubank',
  OTHER = 'Other',
}

export type AccountDocument = HydratedDocument<Account>;

@Schema({ timestamps: true })
export class Account {
  @Prop({
    type: Types.ObjectId,
    ref: 'User',
    required: true,
  })
  user: User;

  @Prop({ required: true, enum: BankName })
  bankName: BankName;

  @Prop({ required: true, enum: AccountType })
  type: AccountType;

  @Prop({ default: 0 })
  balance: number;

  @Prop({ required: true, enum: Currency })
  currency: Currency;
}

export const AccountSchema = SchemaFactory.createForClass(Account);
