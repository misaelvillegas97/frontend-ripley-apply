import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Shell } from '@app/shell/shell.service';
import { marker } from '@biesbjerg/ngx-translate-extract-marker';
import { RecipientComponent } from './recipient.component';

const routes: Routes = [
  Shell.childRoutes([{ path: 'recipient', component: RecipientComponent, data: { title: marker('Recipient') } }]),
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecipientRoutingModule {}
