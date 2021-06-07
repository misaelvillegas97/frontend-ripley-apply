import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormCreateTransferComponent } from './form-create-transfer.component';

describe('FormCreateTransferComponent', () => {
  let component: FormCreateTransferComponent;
  let fixture: ComponentFixture<FormCreateTransferComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormCreateTransferComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormCreateTransferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
