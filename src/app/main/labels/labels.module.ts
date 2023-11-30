import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LabelsComponent } from './labels.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [LabelsComponent],
  imports: [CommonModule, FontAwesomeModule],
})
export class LabelsModule {}
