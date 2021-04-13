import { Component, Input, AfterViewInit, ViewChild, OnInit, OnChanges } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Recipient } from '@app/@core/models/recipient.interface';

@Component({
  selector: 'app-table-recipients',
  templateUrl: './table-recipients.component.html',
  styleUrls: ['./table-recipients.component.scss'],
})
export class TableRecipientsComponent implements OnInit, AfterViewInit, OnChanges {
  @Input('recipientList') recipientList: Recipient[];
  displayedColumns: string[] = ['id', 'name', 'rut', 'email', 'phone'];
  dataSource: any;
  @ViewChild(MatSort) sort: MatSort;

  constructor() {

  }

  ngOnInit() {
    this.refresh();
  }

  ngAfterViewInit(): void {
  }
  
  ngOnChanges() {
    this.refresh()
  }
  
  refresh() {
    this.dataSource = new MatTableDataSource(this.recipientList);
    this.dataSource.sort = this.sort;
  }
}
