import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';


@Component({
  selector: 'app-carry-forward-leave',
  templateUrl: './carry-forward-leave.component.html',
  styleUrls: ['./carry-forward-leave.component.css']
})
export class CarryForwardLeaveComponent implements OnInit {

  displayedColumns: string[] = ['employeename','employeeid','department','carryforwarded','edit'];

  leave = [
    { 'carryforwarded':"",'employeename':"malar",'employeeid':"1",'department':"QA" }
    
    
  ]

  dataSource = new MatTableDataSource<any>(this.leave);


  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor() { }

  ngOnInit() {
    this.dataSource = new MatTableDataSource<any>(this.leave);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}
