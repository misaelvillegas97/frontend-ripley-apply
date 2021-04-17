import { ReactiveFormsModule } from '@angular/forms';
import { I18nModule } from '@app/i18n';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TranslateModule } from '@ngx-translate/core';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TransferRoutingModule } from './transfer-routing.module';
import { TransferComponent } from './transfer.component';
import { FormCreateTransferComponent } from './form-create-transfer/form-create-transfer.component';

@NgModule({
  declarations: [TransferComponent, FormCreateTransferComponent],
  imports: [
    CommonModule,
    TransferRoutingModule,
    TranslateModule,
    NgbModule,
    I18nModule,
    ReactiveFormsModule
  ],
})
export class TransferModule {}
