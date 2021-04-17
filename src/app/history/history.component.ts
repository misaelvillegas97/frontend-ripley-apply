import { TransferService } from './../transfer/transfer.service';
import { Transfer } from './../@core/models/transfer.interface';
import { UntilDestroy, untilDestroyed } from '@core';
import { Component, OnInit } from '@angular/core';

@UntilDestroy()
@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss'],
})
export class HistoryComponent implements OnInit {
  public transferList: Transfer[];

  constructor(private transferService: TransferService) {
    this.loadInfo();
  }

  ngOnInit(): void {}

  loadInfo() {
    this.transferService
      .getList()
      .pipe(untilDestroyed(this))
      .subscribe((transfer: Transfer[]) => (this.transferList = transfer));
  }
}
