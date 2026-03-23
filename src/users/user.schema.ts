import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type UserDocument = HydratedDocument<User>;

@Schema({ timestamps: true })
export class User {
  @Prop({ required: true })
  private _firstName: string;

  @Prop({ required: true })
  private _lastName: string;

  @Prop({ required: true, unique: true })
  private _email: string;

  @Prop({ required: true })
  private _password: string;

  get firstName(): string {
    return this._firstName;
  }
  get email(): string {
    return this._email;
  }
}

export const UserSchema = SchemaFactory.createForClass(User);
