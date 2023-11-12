import { StatusType } from '../status-type';
import { EntryType } from './entry-type';

export interface Entry {
  id: string;
  description: string;
  type: EntryType;
  date: Date;
  labels: string[];
  settled: StatusType;
  amount: number;
}
