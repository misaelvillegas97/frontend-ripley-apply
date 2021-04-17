import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Shell } from '@app/shell/shell.service';
import { marker } from '@biesbjerg/ngx-translate-extract-marker';
import { RecipientBankComponent } from './recipient-bank.component';

const routes: Routes = [
  Shell.childRoutes([
    {
      path: 'recipient-account',
      component: RecipientBankComponent,
      data: {title: marker('Recipient\'s account')}
    }
  ]),
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecipientBankRoutingModule { }
