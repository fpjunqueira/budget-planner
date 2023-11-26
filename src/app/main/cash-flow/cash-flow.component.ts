import { Component, Injector, OnInit } from '@angular/core';
import { Entry } from './entry/entry.model';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { ActionType } from './action.type';
import { EntryFormModalComponent } from './entry-form-modal/entry-form-modal.component';
import { ENTRY_DATA } from './entry.injection-token';
import { Observable } from 'rxjs';
import { CashFlowService } from './cash-flow.service';
import { StatusType } from './status-type';
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
    // this.entries$ = this.service.getEntries();

    this.service.getEntries().subscribe((entries) => {
      console.log(entries);
      this.entries = entries;

      this.totalIncomming = entries
        .filter((entry) => entry.type === EntryType.INCOMING)
        .map((entry) => entry.amount)
        .reduce((prev, curr) => prev + curr);

      this.totalOutgoing = entries
        .filter((entry) => entry.type === EntryType.OUTGOING)
        .map((entry) => entry.amount)
        .reduce((prev, curr) => prev + curr);

      this.amount = this.totalIncomming - this.totalOutgoing;

      // const negative = entries
      //   .filter((entry) => entry.settled === StatusType.SETTLED)
      //   .map((entry) => entry.amount)
      //   .reduce((prev, curr) => prev + curr);

      console.log(
        entries.filter((entry) => entry.settled === StatusType.SETTLED)
      );
    });
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
