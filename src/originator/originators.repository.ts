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
    const createdOriginator = new this._originatorModel({
      _longName: dto.longName,
      _shortName: dto.shortName,
      _category: dto.categoryId,
    });
    return await createdOriginator.save();
  }

  async findAll(): Promise<OriginatorDocument[]> {
    return await this._originatorModel.find().populate('_category').exec();
  }

  async findById(id: string): Promise<OriginatorDocument | null> {
    return await this._originatorModel.findById(id).exec();
  }

  async update(
    id: string,
    dto: UpdateOriginatorDto,
  ): Promise<OriginatorDocument | null> {
    const updateData = {
      ...(dto.longName && { _longName: dto.longName }),
      ...(dto.shortName && { _shortName: dto.shortName }),
      ...(dto.categoryId && { _category: dto.categoryId }),
    };
    return await this._originatorModel
      .findByIdAndUpdate(id, updateData, { new: true })
      .exec();
  }

  async delete(id: string): Promise<boolean> {
    const result = await this._originatorModel.findByIdAndDelete(id).exec();
    return !!result;
  }
}
