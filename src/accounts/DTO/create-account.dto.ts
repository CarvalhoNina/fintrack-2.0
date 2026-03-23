import {
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  IsUUID,
} from 'class-validator';
import { AccountType, Currency } from '../account.entity';

export class CreateAccountDto {
  @IsUUID('4', { message: 'O ID do cliente deve ser um UUID válido' })
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
