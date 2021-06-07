import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipientBankComponent } from './recipient-bank.component';

describe('RecipientBankComponent', () => {
  let component: RecipientBankComponent;
  let fixture: ComponentFixture<RecipientBankComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RecipientBankComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipientBankComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
