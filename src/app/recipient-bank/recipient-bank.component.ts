import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UntilDestroy, untilDestroyed } from '@app/@core';
import { Recipient } from '@app/@core/models/recipient.interface';
import { RecipientBank } from '@app/@core/models/recipient_bank.interface';
import { RecipientService } from '@app/recipient/recipient.service';
import { filter, map } from 'rxjs/operators';
import { RecipientBankService } from './recipient-bank.service';

@UntilDestroy()
@Component({
  selector: 'app-recipient-bank',
  templateUrl: './recipient-bank.component.html',
  styleUrls: ['./recipient-bank.component.scss'],
})
export class RecipientBankComponent implements OnInit {
  public recipient: Recipient;
  public accountList: RecipientBank[];

  constructor(
    private recipientBankService: RecipientBankService,
    private recipientService: RecipientService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      if (params.recipient) {
        this.loadRecipient(params.recipient);
      }
    });
  }

  hasCreated(flag: Boolean) {
    if (flag) {
      this.loadInfo(this.recipient.id);
    }
  }

  loadRecipient(recipient_id: string) {
    this.recipientService
      .getById(recipient_id)
      .pipe(untilDestroyed(this))
      .subscribe((recipient: Recipient) => {
        this.recipient = recipient;
        this.accountList = this.recipient.recipient_bank;
      });
  }

  loadInfo(recipient_id: string) {
    this.recipientBankService
      .getList(recipient_id)
      .pipe(untilDestroyed(this))
      .subscribe((accounts) => (this.accountList = accounts));
  }
}
