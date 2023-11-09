import { EntryType } from './entry-type';
import { Entry } from './entry.model';

export function entryData(): Entry[] {
  return [
    {
      id: 1,
      description: 'Boostr TransferWise',
      type: EntryType.INCOMING,
      date: new Date(),
      labels: ['job', 'work', 'boostr'],
      settled: true,
      amount: 25000.0,
    },
    {
      id: 2,
      description: 'Aluguel',
      type: EntryType.OUTGOING,
      date: new Date(),
      labels: ['home'],
      settled: false,
      amount: 1280.0,
    },
    {
      id: 2,
      description: 'Aluguel',
      type: EntryType.OUTGOING,
      date: new Date(),
      labels: ['home'],
      settled: false,
      amount: 1280.0,
    },
    {
      id: 1,
      description: 'Boostr TransferWise',
      type: EntryType.INCOMING,
      date: new Date(),
      labels: ['job', 'work', 'boostr'],
      settled: true,
      amount: 25000.0,
    },
    {
      id: 2,
      description: 'Aluguel',
      type: EntryType.OUTGOING,
      date: new Date(),
      labels: ['home'],
      settled: false,
      amount: 1280.0,
    },
    {
      id: 1,
      description: 'Boostr TransferWise',
      type: EntryType.INCOMING,
      date: new Date(),
      labels: ['job', 'work', 'boostr'],
      settled: true,
      amount: 25000.0,
    },
    {
      id: 1,
      description: 'Boostr TransferWise',
      type: EntryType.INCOMING,
      date: new Date(),
      labels: ['job', 'work', 'boostr'],
      settled: true,
      amount: 25000.0,
    },
  ];
}
