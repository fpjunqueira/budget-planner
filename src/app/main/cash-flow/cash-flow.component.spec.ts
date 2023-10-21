import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CashFlowComponent } from './cash-flow.component';

describe('CashFlowComponent', () => {
  let component: CashFlowComponent;
  let fixture: ComponentFixture<CashFlowComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CashFlowComponent]
    });
    fixture = TestBed.createComponent(CashFlowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});