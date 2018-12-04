import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';

@Component({
  selector: 'app-interview-selection',
  templateUrl: './interview-selection.component.html',
  styleUrls: ['./interview-selection.component.css']
})
export class InterviewSelectionComponent implements OnInit {

 

displayedColumns: string[] = ['s_name','s_email', 's_cv','s_select'];

  selection = [
    { 's_name':'name1','s_email':'email','s_cv':'abc'}
  
  ]
  dataSource = new MatTableDataSource<any>(this.selection);
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;


  constructor() { }

  ngOnInit() {
    this.dataSource = new MatTableDataSource<any>(this.selection);
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
