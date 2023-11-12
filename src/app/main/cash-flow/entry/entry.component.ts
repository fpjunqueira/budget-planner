import { Component, EventEmitter, Input, Output } from '@angular/core';

import {
  faArrowTrendDown,
  faArrowTrendUp,
  faCircleXmark,
  faCircleCheck,
} from '@fortawesome/free-solid-svg-icons';
import { Entry } from './entry.model';
import { EntryType } from './entry-type';
import { StatusType } from '../status-type';

@Component({
  selector: 'app-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.scss'],
})
export class EntryComponent {
  @Input() entry: Entry;
  @Output() entryClicked = new EventEmitter<Entry>();

  EntryType = EntryType;
  StatusType = StatusType;
  faArrowTrendDown = faArrowTrendDown;
  faArrowTrendUp = faArrowTrendUp;
  faCircleXmark = faCircleXmark;
  faCircleCheck = faCircleCheck;

  entryClick() {
    this.entryClicked.emit(this.entry);
  }
}
