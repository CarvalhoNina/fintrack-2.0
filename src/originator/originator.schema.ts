import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Types } from 'mongoose';
import { Category } from 'src/categories/categories.schema';

export type OriginatorDocument = HydratedDocument<Originator>;

@Schema({ timestamps: true })
export class Originator {
  @Prop({ name: 'longName', required: true })
  private _longName: string;

  @Prop({ name: 'shortName', required: true })
  private _shortName: string;

  @Prop({
    type: Types.ObjectId,
    ref: 'Category',
    required: true,
  })
  private _category: Category;

  get longName(): string {
    return this._longName;
  }
  get shortName(): string {
    return this._shortName;
  }

  get category(): Category {
    return this._category;
  }
}

export const OriginatorSchema = SchemaFactory.createForClass(Originator);
