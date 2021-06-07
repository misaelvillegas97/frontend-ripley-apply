import { HistoryComponent } from './history.component';
import { marker } from '@biesbjerg/ngx-translate-extract-marker';
import { TransferComponent } from './../transfer/transfer.component';
import { Shell } from '@app/shell/shell.service';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  Shell.childRoutes([
    {
      path: 'history',
      component: HistoryComponent,
      data: { title: marker('Recipient') },
    },
  ]),
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HistoryRoutingModule {}
