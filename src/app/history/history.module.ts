import { I18nModule } from '@app/i18n';
import { TranslateModule } from '@ngx-translate/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HistoryRoutingModule } from './history-routing.module';
import { HistoryComponent } from './history.component';
import { TableHistoryComponent } from './table-history/table-history.component';

@NgModule({
  declarations: [HistoryComponent, TableHistoryComponent],
  imports: [
    CommonModule,
    HistoryRoutingModule,
    MatTableModule,
    ReactiveFormsModule,
    NgbModule,
    TranslateModule,
    I18nModule,
  ],
  exports: [TableHistoryComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class HistoryModule {}
