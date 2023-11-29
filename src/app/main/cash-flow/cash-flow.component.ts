import { Component, Injector, OnInit } from '@angular/core';
import { Entry } from './entry/entry.model';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { ActionType } from './action.type';
import { EntryFormModalComponent } from './entry/entry-form-modal/entry-form-modal.component';
import { ENTRY_DATA } from './entry/entry.injection-token';
import { CashFlowService } from './cash-flow.service';
import { EntryType } from './entry/entry-type';

@Component({
  selector: 'app-cash-flow',
  templateUrl: './cash-flow.component.html',
  styleUrls: ['./cash-flow.component.scss'],
})
export class CashFlowComponent implements OnInit {
  entries: Entry[];

  amount: number = 0.0;
  totalIncomming: number = 0.0;
  totalOutgoing: number = 0.0;

  monthName = new Date().toLocaleString('default', { month: 'long' });
  modalRef: NgbModalRef;
  action: ActionType = ActionType.ADD;
  ActionType = ActionType;

  constructor(
    private activeModal: NgbModal,
    private service: CashFlowService
  ) {}

  ngOnInit(): void {
    this.service.getEntries().subscribe((entries) => {
      console.log(entries);
      this.entries = entries;
      this.updateAmount();
    });
  }

  // TODO: create testable service
  private updateAmount() {
    this.totalIncomming = this.entries
      .filter((entry) => entry.type === EntryType.INCOMING)
      .map((entry) => entry.amount)
      .reduce((prev, curr) => prev + curr, 0);

    this.totalOutgoing = this.entries
      .filter((entry) => entry.type === EntryType.OUTGOING)
      .map((entry) => entry.amount)
      .reduce((prev, curr, ) => prev + curr, 0);

    this.amount = this.totalIncomming - this.totalOutgoing;
  }

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
