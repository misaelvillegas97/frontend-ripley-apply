import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { I18nModule } from '@app/i18n';

import { RecipientRoutingModule } from './recipient-routing.module';
import { RecipientComponent } from './recipient.component';


@NgModule({
  declarations: [RecipientComponent],
  imports: [
    CommonModule,
    RecipientRoutingModule,
    ReactiveFormsModule,
    NgbModule,
    TranslateModule,
    I18nModule
  ]
})
export class RecipientModule { }
