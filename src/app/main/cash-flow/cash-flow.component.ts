import { Component, Injector } from '@angular/core';
import { Entry } from './entry/entry.model';
import { entryData } from './entry-data.mock';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { ActionType } from './action.type';
import { EntryFormModalComponent } from './entry-form-modal/entry-form-modal.component';
import { ENTRY_DATA } from './entry.injection-token';

@Component({
  selector: 'app-cash-flow',
  templateUrl: './cash-flow.component.html',
  styleUrls: ['./cash-flow.component.scss'],
})
export class CashFlowComponent {
  monthName = new Date().toLocaleString('default', { month: 'long' });
  entries: Entry[] = entryData();
  modalRef: NgbModalRef;
  action: ActionType = ActionType.SAVE;
  ActionType = ActionType;

  constructor(private activeModal: NgbModal) {}

  add() {
    const injector = Injector.create({
      providers: [{ provide: ENTRY_DATA, useValue: null }],
    });
    this.modalRef = this.activeModal.open(EntryFormModalComponent, {
      injector,
    });
  }

  update(entry: Entry) {
    const injector = Injector.create({
      providers: [{ provide: ENTRY_DATA, useValue: entry }],
    });

    this.modalRef = this.activeModal.open(EntryFormModalComponent, {
      injector,
    });
  }

  close() {
    this.modalRef.close();
  }

  dismiss() {
    this.modalRef.dismiss();
  }
}
