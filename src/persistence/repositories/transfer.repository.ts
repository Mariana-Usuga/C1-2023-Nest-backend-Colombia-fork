import { Injectable } from '@nestjs/common';
import { TransferEntity } from '../entities/transfer.entity';
import { BaseRepository } from './base';
import { TransferRepositoryInterface } from './interfaces';

@Injectable()
export class TransferRepository
  extends BaseRepository<TransferEntity>
  implements TransferRepositoryInterface
{
  register(entity: TransferEntity): TransferEntity {
    throw new Error('This method is not implemented');
  }

  update(id: string, entity: TransferEntity): TransferEntity {
    throw new Error('This method is not implemented');
  }

  delete(id: string, soft?: boolean): void {
    throw new Error('This method is not implemented');
  }

  findAll(): TransferEntity[] {
    throw new Error('This method is not implemented');
  }

  findOneById(id: string): TransferEntity {
    throw new Error('This method is not implemented');
  }

  fun(accountId: string): void {
    throw new Error('Method not implemented.');
  }

  findOutcomeByDataRange(
    accountId: string,
    dateInit: number | Date,
    dateEnd: number | Date,
  ): TransferEntity[] {
    throw new Error('Method not implemented.');
  }
  findIncomeByDataRange(
    accountId: string,
    dateInit: number | Date,
    dateEnd: number | Date,
  ): TransferEntity[] {
    throw new Error('Method not implemented.');
  }

  private hardDelete(index: number): void {
    throw new Error('This method is not implemented');
  }

  private softDelete(index: number): void {
    throw new Error('This method is not implemented');
  }
}
