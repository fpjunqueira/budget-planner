import { Component } from '@angular/core';

@Component({
  selector: 'app-cash-flow',
  templateUrl: './cash-flow.component.html',
  styleUrls: ['./cash-flow.component.scss'],
})
export class CashFlowComponent {
  month: string = `${(new Date().getMonth() + 1).toString()}/${new Date()
    .getFullYear()
    .toString()}`;
}
