import { Component, Inject, OnInit } from '@angular/core';
import { ActionType } from '../action.type';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Entry } from '../entry/entry.model';
import { ENTRY_DATA } from '../entry.injection-token';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CashFlowService } from '../cash-flow.service';
import { catchError, of } from 'rxjs';

@Component({
  selector: 'app-entry-form-modal',
  templateUrl: './entry-form-modal.component.html',
  styleUrls: ['./entry-form-modal.component.scss'],
})
export class EntryFormModalComponent implements OnInit {
  action: ActionType = ActionType.SAVE;
  ActionType = ActionType;
  entryForm: FormGroup;

  constructor(
    public activeModal: NgbActiveModal,
    private fb: FormBuilder,
    private service: CashFlowService,
    @Inject(ENTRY_DATA) public entry: Entry
  ) {}

  ngOnInit(): void {
    this.buildEntryForm();
  }

  private buildEntryForm() {
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
    const entryData: Entry = this.entryForm.value;

    if (!entryData.id) {
      this.addEntry(entryData);
    } else {
      this.editEntry(entryData);
    }

    console.log('Saving', entryData);

    alert('Success');
    this.activeModal.close();
  }

  editEntry(entryData: Entry) {
    // this.service.addEntries
  }

  addEntry(entryData: Entry) {
    this.service
      .addEntry(entryData)
      .pipe(
        catchError((error) => {
          console.error('Error on saving', error);
          return of(error);
        })
      )
      .subscribe({
        next: (data) => alert('Succes on saving' + data),
        error: (err) => console.error('Error', err),
        complete: () => console.log('Compolete'),
      });
  }
}
