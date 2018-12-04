import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';

@Component({
  selector: 'app-availability',
  templateUrl: './availability.component.html',
  styleUrls: ['./availability.component.css']
})
export class AvailabilityComponent implements OnInit {

  displayedColumns: string[] = ['id', 'name','date','time','edit/delete'];

  availabilityDetails = [
    { 'id':'1', 'name':'John', 'date' :'17.11.2018','time':'11.30AM', 'edit/delete':'' },
  
    
  ]
  dataSource = new MatTableDataSource<any>(this.availabilityDetails);


  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  

  constructor() { }

  ngOnInit() {
    this.dataSource = new MatTableDataSource<any>(this.availabilityDetails);
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

