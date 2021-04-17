import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecipientBankRoutingModule } from './recipient-bank-routing.module';
import { RecipientBankComponent } from './recipient-bank.component';
import { TableAccountComponent } from './table-account/table-account.component';
import { MatTableModule } from '@angular/material/table';
import { ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { I18nModule } from '@app/i18n';
import { FormCreateAccountComponent } from './form-create-account/form-create-account.component';


@NgModule({
  declarations: [RecipientBankComponent, TableAccountComponent, FormCreateAccountComponent],
  imports: [
    CommonModule,
    RecipientBankRoutingModule,
    MatTableModule,
    TranslateModule,
    NgbModule,
    I18nModule,
    ReactiveFormsModule,
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class RecipientBankModule { }
