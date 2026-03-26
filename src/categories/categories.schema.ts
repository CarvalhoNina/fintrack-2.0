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
  @Prop({ name: 'type', required: true, enum: CategoryType })
  private _type: CategoryType;

  @Prop({ name: 'subtype', required: true, enum: CategorySubtype })
  private _subtype: CategorySubtype;

  get type(): CategoryType {
    return this._type;
  }
  get subtype(): CategorySubtype {
    return this._subtype;
  }
}

export const CategorySchema = SchemaFactory.createForClass(Category);
