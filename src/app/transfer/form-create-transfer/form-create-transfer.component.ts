import { RecipientBank } from '@app/@core/models/recipient_bank.interface';
import { finalize } from 'rxjs/operators';
import { TransferService } from './../transfer.service';
import { Transfer } from './../../@core/models/transfer.interface';
import { Recipient } from '@app/@core/models/recipient.interface';
import { Observable } from 'rxjs';
import { RecipientService } from '@app/recipient/recipient.service';
import { UntilDestroy, untilDestroyed, Logger } from '@core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, Input, OnInit } from '@angular/core';

const log = new Logger('Transfer');

@UntilDestroy()
@Component({
  selector: 'app-form-create-transfer',
  templateUrl: './form-create-transfer.component.html',
  styleUrls: ['./form-create-transfer.component.scss'],
})
export class FormCreateTransferComponent implements OnInit {
  @Input('recipientList') recipientList: Recipient[];
  transferForm!: FormGroup;
  isLoading: Boolean = false;
  recipientBankList: RecipientBank[];
  exitoMessageStatus: Boolean = false;

  constructor(private transferService: TransferService, private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.createForm();
  }

  save() {
    this.isLoading = true;
    const recipient$ = this.transferService.saveTransfer(this.transferForm.value as Transfer);

    recipient$
      .pipe(
        finalize(() => {
          this.transferForm.markAsPristine();
          this.isLoading = false;
          this.exitoMessageStatus = true;
          setTimeout(() => {
            this.exitoMessageStatus = false;
          }, 3000);
        }),
        untilDestroyed(this)
      )
      .subscribe((transfer: Transfer) => {
        log.info(transfer);
      });

    this.transferForm.patchValue({
      id_recipient: '',
      id_account: '',
      amount: '',
    });
  }

  private createForm() {
    this.transferForm = this.formBuilder.group({
      id_recipient: ['', Validators.required],
      id_account: ['', Validators.required],
      amount: ['', Validators.required],
    });
  }

  public updateAccountList($event: string) {
    this.recipientBankList = this.recipientList.filter((recipient) => recipient.id === $event)[0].recipient_bank;
  }
}
