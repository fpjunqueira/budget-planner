import { Component } from '@angular/core';
import { Entry } from './entry/entry.model';
import { entryData } from './entry/entry-data.mock';

@Component({
  selector: 'app-cash-flow',
  templateUrl: './cash-flow.component.html',
  styleUrls: ['./cash-flow.component.scss'],
})
export class CashFlowComponent {
  date: Date = new Date();
  monthName = new Date().toLocaleString('default', { month: 'long' });
  entries: Entry[] = entryData();
}
