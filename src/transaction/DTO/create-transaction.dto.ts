import {
  IsDateString,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsUUID,
} from 'class-validator';

export class CreateTransactionDto {
  @IsNumber({}, { message: 'O montante da transação deve ser um número' })
  @IsNotEmpty({ message: 'O valor deve ser positivo e existir' })
  amount: number;

  @IsDateString(
    {},
    { message: 'A data deve estar no formato ISO (Ex: 2026-03-23)' },
  )
  @IsOptional()
  date?: string;

  @IsUUID('4', { message: 'O ID do originator deve ser valido' })
  @IsNotEmpty()
  originatorId: string;

  @IsUUID('4', { message: 'O ID da conta deve ser valido' })
  @IsNotEmpty()
  accountId: string;

  @IsUUID('4', { message: 'O ID da categoria deve ser valido' })
  @IsNotEmpty()
  categoryId: string;
}
