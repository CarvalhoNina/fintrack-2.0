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
  @Prop({ name: 'clientId', required: true })
  private _clientId: string;

  @Prop({ name: 'bankName', required: true })
  private _bankName: string;

  @Prop({ required: true, enum: AccountType })
  private _type: AccountType;

  @Prop({ name: 'balance', default: 0 })
  private _balance: number;

  @Prop({ name: 'currency', required: true, enum: Currency })
  private _currency: Currency;

  get clientId(): string {
    return this._clientId;
  }
  get bankName(): string {
    return this._bankName;
  }
  get type(): AccountType {
    return this._type;
  }
  get balance(): number {
    return this._balance;
  }
  get currency(): Currency {
    return this._currency;
  }
}

export const AccountSchema = SchemaFactory.createForClass(Account);
