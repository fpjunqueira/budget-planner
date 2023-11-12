import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntryLabelComponent } from './entry-label.component';

describe('EntryLabelComponent', () => {
  let component: EntryLabelComponent;
  let fixture: ComponentFixture<EntryLabelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EntryLabelComponent]
    });
    fixture = TestBed.createComponent(EntryLabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
