import { Component, Injector, OnInit } from '@angular/core';
import { Entry } from './entry/entry.model';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { ActionType } from './action.type';
import { EntryFormModalComponent } from './entry-form-modal/entry-form-modal.component';
import { ENTRY_DATA } from './entry.injection-token';
import { Observable } from 'rxjs';
import { CashFlowService } from './cash-flow.service';

@Component({
  selector: 'app-cash-flow',
  templateUrl: './cash-flow.component.html',
  styleUrls: ['./cash-flow.component.scss'],
})
export class CashFlowComponent implements OnInit{
  entries$: Observable<Entry[]>;

  monthName = new Date().toLocaleString('default', { month: 'long' });
  modalRef: NgbModalRef;
  action: ActionType = ActionType.ADD;
  ActionType = ActionType;

  constructor(private activeModal: NgbModal, private service: CashFlowService,) {}

  ngOnInit(): void {
    this.entries$ = this.service.getEntries();
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
