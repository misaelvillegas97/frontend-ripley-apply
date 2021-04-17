import { Recipient } from '@app/@core/models/recipient.interface';
import { RecipientService } from '@app/recipient/recipient.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-transfer',
  templateUrl: './transfer.component.html',
  styleUrls: ['./transfer.component.scss'],
})
export class TransferComponent implements OnInit {
  public recipientList: Recipient[];

  constructor(private recipientService: RecipientService) {
    this.loadInfo();
  }

  ngOnInit(): void {}

  private loadInfo() {
    this.recipientService.getList().subscribe((list: Recipient[]) => {
      this.recipientList = list;
    });
  }
}
