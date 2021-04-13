import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Logger, UntilDestroy, untilDestroyed } from '@app/@core';
import { Recipient } from '@app/@core/models/recipient.interface';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import * as rut_validator from 'rut.js';
import { RecipientService } from '../recipient.service';
import { validateRUT } from '@app/@shared/validators/rut.validator';

const log = new Logger('Recipient');

@UntilDestroy()
@Component({
  selector: 'app-form-create-recipient',
  templateUrl: './form-create-recipient.component.html',
  styleUrls: ['./form-create-recipient.component.scss'],
})
export class FormCreateRecipientComponent implements OnInit {
  @Output() hasCreated = new EventEmitter<boolean>();

  recipientForm!: FormGroup;
  isLoading: Boolean = false;

  recipientList$: Observable<Recipient[]>;

  constructor(private recipientService: RecipientService, private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.createForm();
  }

  formatRut(rut: string) {
    this.recipientForm.patchValue({
      rut: rut_validator.format(rut),
    });
  }

  save() {
    this.isLoading = true;
    const recipient$ = this.recipientService.saveRecipient(this.recipientForm.value as Recipient);

    recipient$
      .pipe(
        finalize(() => {
          this.recipientForm.markAsPristine();
          this.isLoading = false;
          this.hasCreated.emit(true);
        }),
        untilDestroyed(this)
      )
      .subscribe((recipient: Recipient) => {
        log.info(recipient);
      });
  }

  private createForm() {
    this.recipientForm = this.formBuilder.group({
      name: ['', Validators.required],
      rut: ['', [Validators.required, validateRUT]],
      email: ['', Validators.required],
      phone_number: ['', Validators.required],
    });
  }
}
