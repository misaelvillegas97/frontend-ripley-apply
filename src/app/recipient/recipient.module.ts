import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { I18nModule } from '@app/i18n';
import { MatTableModule } from '@angular/material/table';

import { RecipientRoutingModule } from './recipient-routing.module';
import { RecipientComponent } from './recipient.component';
import { FormCreateRecipientComponent } from './form-create-recipient/form-create-recipient.component';
import { TableRecipientsComponent } from './table-recipients/table-recipients.component';

@NgModule({
  declarations: [RecipientComponent, FormCreateRecipientComponent, TableRecipientsComponent],
  imports: [
    CommonModule,
    RecipientRoutingModule,
    MatTableModule,
    ReactiveFormsModule,
    NgbModule,
    TranslateModule,
    I18nModule,
  ],
  exports: [
    RecipientComponent, FormCreateRecipientComponent, TableRecipientsComponent
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class RecipientModule { }
