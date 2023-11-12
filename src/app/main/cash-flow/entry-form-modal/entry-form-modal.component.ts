import { Component, Inject, OnInit } from '@angular/core';
import { ActionType } from '../action.type';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Entry } from '../entry/entry.model';
import { ENTRY_DATA } from '../entry.injection-token';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CashFlowService } from '../cash-flow.service';
import { EntryType } from '../entry/entry-type';
import { StatusType } from '../status-type';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-entry-form-modal',
  templateUrl: './entry-form-modal.component.html',
  styleUrls: ['./entry-form-modal.component.scss'],
})
export class EntryFormModalComponent implements OnInit {
  action: ActionType;
  ActionType = ActionType;
  EntryType = EntryType;
  StatusType = StatusType;
  faPlus = faPlus;

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
      this.action = ActionType.EDIT;
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
      this.action = ActionType.ADD;
      this.entryForm = this.fb.group({
        id: [undefined],
        description: ['', [Validators.required]],
        type: ['', [Validators.required]],
        date: ['', [Validators.required]],
        labels: this.fb.array(['']),
        settled: ['', [Validators.required]],
        amount: ['', [Validators.required]],
      });
    }
  }

  save() {
    const entryData: Entry = this.entryForm.value;
    if (!entryData.id) {
      this.addEntry(entryData);
    } else {
      this.updateEntry(entryData);
    }
    this.activeModal.close();
  }

  addEntry(entry: Entry) {
    this.service.addEntry(entry).subscribe({
      next: () => alert('Entry Added'),
      error: (err) => console.error('Error', err),
      complete: () => console.log('Complete'),
    });
  }

  updateEntry(entry: Entry) {
    this.service.updateEntry(entry).subscribe({
      next: () => alert('Entry Updated'),
      error: (err) => console.error('Error', err),
      complete: () => console.log('Complete'),
    });
  }

  delete() {
    this.service.deleteEntry(this.entryForm.value).subscribe({
      next: () => alert('Entry Deleted'),
      error: (err) => console.error('Error', err),
      complete: () => console.log('Complete'),
    });
    this.activeModal.close();
  }

  addBadge() {
    // TODO: throw new Error('Method not implemented.');
  }
}
