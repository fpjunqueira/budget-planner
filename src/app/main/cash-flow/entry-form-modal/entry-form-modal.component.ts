import { Component, Inject } from '@angular/core';
import { ActionType } from '../action.type';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Entry } from '../entry/entry.model';
import { ENTRY_DATA } from '../entry.injection-token';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-entry-form-modal',
  templateUrl: './entry-form-modal.component.html',
  styleUrls: ['./entry-form-modal.component.scss'],
})
export class EntryFormModalComponent {
  action: ActionType = ActionType.SAVE;
  ActionType = ActionType;
  entryForm: FormGroup;

  constructor(
    public activeModal: NgbActiveModal,
    private fb: FormBuilder,
    @Inject(ENTRY_DATA) public entry: Entry
  ) {
    if (this.entry) {
      this.entryForm = this.fb.group({
        id: [this.entry.id],
        description: [this.entry.description, [Validators.required]],
        type: [this.entry.type, [Validators.required]],
        date: [this.entry.date, [Validators.required]],
        labels: this.fb.array(this.entry.labels),
        settled: [this.entry.settled, [Validators.required]],
        amount: [this.entry.amount, [Validators.required]],
      });
    } else {
      this.entryForm = this.fb.group({
        id: [undefined],
        description: ['', [Validators.required]],
        type: ['', [Validators.required]],
        date: ['', [Validators.required]],
        labels: this.fb.array(['']),
        settled: [false, [Validators.required]],
        amount: [0, [Validators.required]],
      });
    }
  }

  save() {
    this.entry = this.entryForm.value;
    console.log('Saving', this.entry);
    alert('Success', );
    this.activeModal.close();
  }
}
