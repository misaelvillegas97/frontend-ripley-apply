import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { Transfer } from './../../@core/models/transfer.interface';
import { Component, Input, OnInit, ViewChild, OnChanges } from '@angular/core';

@Component({
  selector: 'app-table-history',
  templateUrl: './table-history.component.html',
  styleUrls: ['./table-history.component.scss'],
})
export class TableHistoryComponent implements OnInit, OnChanges {
  @Input('transferList') transferList: Transfer[];
  displayedColumns: string[] = ['user_name', 'user_rut', 'bank', 'type_account', 'number_account', 'amount', 'date'];
  dataSource: any;
  @ViewChild(MatSort) sort: MatSort;

  ngOnInit() {
    console.log(this.transferList);
    this.refresh();
  }

  ngAfterViewInit(): void {}

  ngOnChanges() {
    this.refresh();
  }

  refresh() {
    this.dataSource = new MatTableDataSource(this.transferList);
    this.dataSource.sort = this.sort;
  }
}
