import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Account, AccountDocument } from './accounts.schema';
import { CreateAccountDto } from './DTO/create-account.dto';
import { UpdateAccountDto } from './DTO/update-account.dto';

@Injectable()
export class AccountsRepository {
  constructor(
    @InjectModel(Account.name)
    private readonly _accountModel: Model<AccountDocument>,
  ) {}

  async save(dto: CreateAccountDto): Promise<AccountDocument> {
    const createdAccount = new this._accountModel(dto);
    return await createdAccount.save();
  }

  async findAll(): Promise<AccountDocument[]> {
    return await this._accountModel.find().exec();
  }

  async findById(id: string): Promise<AccountDocument | null> {
    return await this._accountModel.findById(id).exec();
  }

  async update(
    id: string,
    dto: UpdateAccountDto,
  ): Promise<AccountDocument | null> {
    return await this._accountModel
      .findByIdAndUpdate(id, dto, { new: true })
      .exec();
  }

  async delete(id: string): Promise<boolean> {
    const result = await this._accountModel.findByIdAndDelete(id).exec();
    return !!result;
  }
}
