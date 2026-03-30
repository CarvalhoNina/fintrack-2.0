import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Types } from 'mongoose';
import { Category } from 'src/categories/categories.schema';

export type OriginatorDocument = HydratedDocument<Originator>;

@Schema({ timestamps: true })
export class Originator {
  @Prop({ required: true })
  longName: string;

  @Prop({ required: true })
  shortName: string;

  @Prop({
    type: Types.ObjectId,
    ref: 'Category',
    required: true,
  })
  category: Category;
}

export const OriginatorSchema = SchemaFactory.createForClass(Originator);
