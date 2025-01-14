import { v4 as uuid } from 'uuid';
import { TransferModel } from '../../models';

export class TransferEntity implements TransferModel {
  id = uuid();

  outcome: string;

  income: string;

  amount: number;

  reason: string;

  dateTime: number | Date;

  deletedAt?: number | Date | undefined;
}
