import {
  IsEnum,
  IsMongoId,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';
import { AccountType, Currency } from '../accounts.schema';

export class CreateAccountDto {
  @IsMongoId({ message: 'O ID do originator deve ser um ID válido do MongoDB' })
  @IsNotEmpty()
  clientId: string;

  @IsString({ message: 'O nome do banco deve ser um texto' })
  @IsNotEmpty({ message: 'O nome do banco é obrigatório' })
  bankName: string;

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
