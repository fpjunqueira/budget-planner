import { InjectionToken } from '@angular/core';
import { Entry } from './entry.model';

export const ENTRY_DATA = new InjectionToken<Entry>('EntryData');
