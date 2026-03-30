import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserDocument } from './user.schema';
import { Model } from 'mongoose';
import { CreateUserDto } from './DTO/create-user.dto';
import { UpdateUserDto } from './DTO/update-user.dto';

@Injectable()
export class UsersRepository {
  constructor(
    @InjectModel(User.name)
    private readonly _userModel: Model<UserDocument>,
  ) {}

  async save(dto: CreateUserDto): Promise<UserDocument> {
    const createdUser = new this._userModel(dto);
    return await createdUser.save();
  }

  async findAll(): Promise<UserDocument[]> {
    return await this._userModel.find().exec();
  }

  async findById(id: string): Promise<UserDocument | null> {
    return await this._userModel.findById(id).exec();
  }

  async findByEmail(email: string): Promise<UserDocument | null> {
    return await this._userModel.findOne({ email }).exec();
  }

  async update(id: string, dto: UpdateUserDto): Promise<UserDocument | null> {
    return await this._userModel
      .findByIdAndUpdate(id, dto, { new: true })
      .exec();
  }

  async delete(id: string): Promise<boolean> {
    const result = await this._userModel.findByIdAndDelete(id).exec();
    return !!result;
  }
}
