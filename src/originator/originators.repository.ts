import { Injectable } from '@nestjs/common';
import { Originator, OriginatorDocument } from './originator.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateOriginatorDto } from './DTO/create-originator.dto';
import { UpdateOriginatorDto } from './DTO/update-originator.dto';

@Injectable()
export class OriginatorsRepository {
  constructor(
    @InjectModel(Originator.name)
    private readonly _originatorModel: Model<OriginatorDocument>,
  ) {}

  async save(dto: CreateOriginatorDto): Promise<OriginatorDocument> {
    const createdOriginator = new this._originatorModel(dto);
    return await createdOriginator.save();
  }

  async findAll(): Promise<OriginatorDocument[]> {
    return await this._originatorModel.find().populate('category').exec();
  }

  async findById(id: string): Promise<OriginatorDocument | null> {
    return await this._originatorModel.findById(id).populate('category').exec();
  }

  async update(
    id: string,
    dto: UpdateOriginatorDto,
  ): Promise<OriginatorDocument | null> {
    return await this._originatorModel
      .findByIdAndUpdate(id, dto, { new: true })
      .populate('category')
      .exec();
  }

  async delete(id: string): Promise<boolean> {
    const result = await this._originatorModel.findByIdAndDelete(id).exec();
    return !!result;
  }
}
