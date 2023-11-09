import { Component } from '@angular/core';
import { Entry } from './entry/entry.model';
import { entryData } from './entry/entry-data.mock';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { ActionType } from './action.type';

@Component({
  selector: 'app-cash-flow',
  templateUrl: './cash-flow.component.html',
  styleUrls: ['./cash-flow.component.scss'],
})
export class CashFlowComponent {
  date: Date = new Date();
  monthName = new Date().toLocaleString('default', { month: 'long' });
  entries: Entry[] = entryData();
  action: ActionType = ActionType.SAVE;
  modalRef: NgbModalRef;
  ActionType = ActionType;

  constructor(private modalService: NgbModal) {}

  open(content) {
    this.modalRef = this.modalService.open(content, {
      ariaLabelledBy: 'entry-modal',
    });
  }

  close() {
    this.modalRef.close();
  }

  dismiss() {
    this.modalRef.dismiss();
  }
}
