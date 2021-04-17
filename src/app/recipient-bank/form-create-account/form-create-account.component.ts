import { Recipient } from '@app/@core/models/recipient.interface';
import { Bank } from './../../@core/models/bank.interface';
import { finalize, timeout } from 'rxjs/operators';
import { RecipientBankService } from './../recipient-bank.service';
import { Observable } from 'rxjs';
import { RecipientBank } from '@app/@core/models/recipient_bank.interface';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { UntilDestroy, Logger, untilDestroyed } from '@core';
import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

const log = new Logger('Accounts');

@UntilDestroy()
@Component({
  selector: 'app-form-create-account',
  templateUrl: './form-create-account.component.html',
  styleUrls: ['./form-create-account.component.scss'],
})
export class FormCreateAccountComponent implements OnInit {
  @Input('recipient') recipient: Recipient;
  @Output() hasCreated = new EventEmitter<boolean>();

  bankList: Bank[];
  recipientBankForm!: FormGroup;
  isLoading: Boolean = false;

  recipientList$: Observable<RecipientBank[]>;

  constructor(private recipientService: RecipientBankService, private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.createForm();
    this.loadBankList();
  }

  save() {
    this.isLoading = true;
    const recipient$ = this.recipientService.saveRecipientAccount(this.recipientBankForm.value as RecipientBank);

    this.recipientBankForm.patchValue({
      id_recipient: this.recipient.id,
    });

    recipient$
      .pipe(
        finalize(() => {
          this.recipientBankForm.markAsPristine();
          this.isLoading = false;
          this.hasCreated.emit(true);
        }),
        untilDestroyed(this)
      )
      .subscribe((recipient: RecipientBank) => {
        log.info(recipient);
      });

    this.recipientBankForm.patchValue({
      account_type: '',
      account_number: '',
      id_bank: '',
    });
  }

  private createForm() {
    this.recipientBankForm = this.formBuilder.group({
      id_bank: ['', Validators.required],
      account_type: ['', Validators.required],
      account_number: ['', Validators.required],
      id_recipient: [this.recipient.id, Validators.required],
    });
  }

  private loadBankList() {
    this.recipientService
      .getBankList()
      .pipe(untilDestroyed(this))
      .subscribe((banks: Bank[]) => {
        this.bankList = banks;
      });
  }
}
