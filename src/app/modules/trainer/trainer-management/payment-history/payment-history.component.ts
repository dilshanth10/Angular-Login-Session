import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';

@Component({
  selector: 'app-payment-history',
  templateUrl: './payment-history.component.html',
  styleUrls: ['./payment-history.component.css']
})
export class PaymentHistoryComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name','date','amount','status','update/delete'];

  paymentHistry = [
    { 'id':'1', 'name':'John', 'date' :'17.11.2018','amount':'25000.00','status':'Paid','update/delete':'' },
    { 'id':'2', 'name':'Raja', 'date' :'18.11.2018','amount':'25000.00','status':'Unpaid','update/delete':'' },
    { 'id':'3', 'name':'Raja', 'date' :'18.11.2018','amount':'25000.00','status':'Unpaid','update/delete':'' },
    
  ]
  dataSource = new MatTableDataSource<any>(this.paymentHistry);


  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  

  constructor() { }

  ngOnInit() {
    this.dataSource = new MatTableDataSource<any>(this.paymentHistry);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: any) {
    this.dataSource.filter = filterValue.trim();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}

