import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type UserDocument = HydratedDocument<User>;
@Schema({ _id: false })
class Address {
  @Prop()
  street: string;

  @Prop()
  city: string;

  @Prop()
  province: string;

  @Prop()
  postalCode: string;
}

@Schema({ timestamps: true })
export class User {
  @Prop({ required: true })
  firstName: string;

  @Prop({ required: true })
  lastName: string;

  @Prop({ required: true, unique: true, name: 'email' })
  email: string;

  @Prop({ required: true })
  password: string;

  @Prop({ type: Address })
  address: Address;
}

export const UserSchema = SchemaFactory.createForClass(User);
