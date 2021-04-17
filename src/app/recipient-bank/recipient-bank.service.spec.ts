import { TestBed } from '@angular/core/testing';

import { RecipientBankService } from './recipient-bank.service';

describe('RecipientBankService', () => {
  let service: RecipientBankService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RecipientBankService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
