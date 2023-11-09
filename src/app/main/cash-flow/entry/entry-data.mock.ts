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
      description: 'Internet',
      type: EntryType.OUTGOING,
      date: new Date(),
      labels: ['home'],
      settled: true,
      amount: 99.99,
    },
    {
      id: 1,
      description: 'Restituição',
      type: EntryType.INCOMING,
      date: new Date(),
      labels: ['Receita'],
      settled: true,
      amount: 2500.0,
    },
    {
      id: 2,
      description: 'Cartão de Crédito',
      type: EntryType.OUTGOING,
      date: new Date(),
      labels: ['bank', 'shopping'],
      settled: false,
      amount: 3280.0,
    },
    {
      id: 1,
      description: 'Freelance',
      type: EntryType.INCOMING,
      date: new Date(),
      labels: ['job', 'work', 'boostr'],
      settled: true,
      amount: 25000.0,
    },
    {
      id: 1,
      description: 'Pexper',
      type: EntryType.INCOMING,
      date: new Date(),
      labels: ['job', 'work', 'boostr'],
      settled: true,
      amount: 50800.0,
    },
  ];
}
