import {
  IsEnum,
  IsMongoId,
  IsNotEmpty,
  IsNumber,
  IsOptional,
} from 'class-validator';
import { AccountType, BankName, Currency } from '../accounts.schema';

export class CreateAccountDto {
  @IsMongoId({ message: 'O ID do usuário deve ser um ID válido' })
  @IsNotEmpty()
  user: string;

  @IsEnum(BankName)
  @IsNotEmpty()
  bankName: BankName;

  @IsEnum(AccountType, {
    message: 'O tipo de conta deve ser: checking, savings ou credit',
  })
  type: AccountType;

  @IsEnum(Currency, {
    message: 'A moeda deve ser: BRL, CAD, USD ou EUR',
  })
  currency: Currency;

  @IsNumber({}, { message: 'O saldo deve ser um número' })
  @IsOptional()
  balance?: number;
}
