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

  it('should set the month correctly', () => {
    const expectedMonth = `${new Date().getMonth() + 1}/${new Date().getFullYear()}`;
    expect(component.month).toEqual(expectedMonth);
  });

});
