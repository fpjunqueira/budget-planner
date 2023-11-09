import { Component, Input } from '@angular/core';

import {
  faArrowTrendDown,
  faArrowTrendUp,
  faCircleXmark,
  faCircleCheck

} from '@fortawesome/free-solid-svg-icons';
import { Entry } from './entry.model';
import { EntryType } from './entry-type';

@Component({
  selector: 'app-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.scss'],
})
export class EntryComponent {
  @Input() entry!: Entry;

  EntryType = EntryType;
  faArrowTrendDown = faArrowTrendDown;
  faArrowTrendUp = faArrowTrendUp;
  faCircleXmark = faCircleXmark;
  faCircleCheck = faCircleCheck;
}
