import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormCreateRecipientComponent } from './form-create-recipient.component';

describe('FormCreateRecipientComponent', () => {
  let component: FormCreateRecipientComponent;
  let fixture: ComponentFixture<FormCreateRecipientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormCreateRecipientComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormCreateRecipientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
