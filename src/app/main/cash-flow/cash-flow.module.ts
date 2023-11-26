import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpendingComponent } from '../spending/spending.component';
import { AnalyticsComponent } from '../analytics/analytics.component';
import { SettingsComponent } from '../settings/settings.component';
import { CashFlowComponent } from './cash-flow.component';
import { EntryComponent } from './entry/entry.component';
import { EntryFormModalComponent } from './entry/entry-form-modal/entry-form-modal.component';
import { EntryLabelComponent } from './entry/entry-label/entry-label.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    SpendingComponent,
    AnalyticsComponent,
    SettingsComponent,
    CashFlowComponent,
    EntryComponent,
    EntryFormModalComponent,
    EntryLabelComponent,
  ],
  imports: [CommonModule, FontAwesomeModule, ReactiveFormsModule],
})
export class CashFlowModule {}
