import { Injectable } from '@nestjs/common';
import { Originator } from './originator.entity.ts';

@Injectable()
export class OriginatorsRepository {
  private readonly _originators: Originator[] = [];

  save(originator: Originator): Originator {
    if (!originator.id) {
      originator.id = Math.random().toString(36).substring(7);
    }

    this._originators.push(originator);
    return originator;
  }

  findAll(): Originator[] {
    return [...this._originators];
  }

  findById(id: string): Originator | undefined {
    return this._originators.find((t) => t.id === id);
  }

  delete(id: string): boolean {
    const index = this._originators.findIndex((t) => t.id === id);

    if (index === -1) {
      return false;
    }

    this._originators.splice(index, 1);

    return true;
  }
}
