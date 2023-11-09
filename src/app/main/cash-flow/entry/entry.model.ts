import { EntryType } from './entry-type';

export interface Entry {
  id: number;
  description: string;
  type: EntryType;
  date: Date;
  labels: string[];
  settled: boolean;
  amount: number;
}
