import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export enum CategoryType {
  INCOME = 'income',
  EXPENSE = 'expense',
}

export enum CategorySubtype {
  SALARY = 'salary',
  INVESTMENT = 'investment',
  GIFT = 'gift',
  REWARDS = 'rewards',
  OTHER_INCOME = 'other_income',

  HOUSING = 'housing',
  TRANSPORT = 'transport',
  FOOD = 'food',
  LEISURE = 'leisure',
  HEALTH = 'health',
  EDUCATION = 'education',
  PERSONAL_CARE = 'personal_care',
  OTHER_EXPENSE = 'other_expense',
}

export type CategoryDocument = HydratedDocument<Category>;

@Schema({ timestamps: true })
export class Category {
  @Prop({ required: true, enum: CategoryType })
  type: CategoryType;

  @Prop({ required: true, enum: CategorySubtype })
  subtype: CategorySubtype;
}

export const CategorySchema = SchemaFactory.createForClass(Category);
