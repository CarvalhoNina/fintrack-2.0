import {
  IsDateString,
  IsMongoId,
  IsNotEmpty,
  IsNumber,
  IsOptional,
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

  @IsMongoId({ message: 'O ID do usuario deve ser um ID válido do MongoDB' })
  @IsNotEmpty()
  user: string;

  @IsMongoId({ message: 'O ID do originator deve ser um ID válido do MongoDB' })
  @IsNotEmpty()
  originator: string;

  @IsMongoId({ message: 'O ID do originator deve ser um ID válido do MongoDB' })
  @IsNotEmpty()
  account: string;

  @IsMongoId({ message: 'O ID do originator deve ser um ID válido do MongoDB' })
  @IsNotEmpty()
  category: string;
}
