import { Component, Input, OnInit, ViewChild, OnChanges } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Recipient } from '@app/@core/models/recipient.interface';
import { RecipientBank } from '@app/@core/models/recipient_bank.interface';

@Component({
  selector: 'app-table-account',
  templateUrl: './table-account.component.html',
  styleUrls: ['./table-account.component.scss']
})
export class TableAccountComponent implements OnInit, OnChanges {
  @Input('recipient') recipient: Recipient;
  @Input('accountList') accountList: RecipientBank[];
  displayedColumns: string[] = ['banco', 'cuenta_tipo', 'numero_cuenta', 'actions'];
  dataSource: any;
  @ViewChild(MatSort) sort: MatSort;

  constructor() { }

  ngOnInit() {
    this.refresh();
  }

  ngAfterViewInit(): void {
  }

  ngOnChanges() {
    this.refresh()
  }

  refresh() {
    this.dataSource = new MatTableDataSource(this.accountList);
    this.dataSource.sort = this.sort;
  }

}
