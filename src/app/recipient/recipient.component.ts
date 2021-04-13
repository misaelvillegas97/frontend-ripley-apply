import { Component, OnInit } from '@angular/core';
import { UntilDestroy, untilDestroyed } from '@app/@core';
import { Recipient } from '@app/@core/models/recipient.interface';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { RecipientService } from './recipient.service';

@UntilDestroy()
@Component({
  selector: 'app-recipient',
  templateUrl: './recipient.component.html',
  styleUrls: ['./recipient.component.scss'],
})
export class RecipientComponent implements OnInit {
  public recipientList: Recipient[];

  constructor(private recipientService: RecipientService) {
    this.loadInfo();
  }

  ngOnInit(): void {
  }
  
  hasCreated(flag: Boolean) {
    console.log('event triggered')
    if (flag) {
      this.loadInfo()
    }
  }

  loadInfo() {
    this.recipientService.getList().pipe(
      untilDestroyed(this)
    ).subscribe(
      recipients => this.recipientList = recipients
    )
  }
}
