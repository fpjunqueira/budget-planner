import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntryFormModalComponent } from './entry-form-modal.component';

describe('EntryFormModalComponent', () => {
  let component: EntryFormModalComponent;
  let fixture: ComponentFixture<EntryFormModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EntryFormModalComponent]
    });
    fixture = TestBed.createComponent(EntryFormModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
