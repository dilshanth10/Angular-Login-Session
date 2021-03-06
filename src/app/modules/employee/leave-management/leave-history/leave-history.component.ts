import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { LeaveRequestService } from 'src/app/services/leave-management/leave-request.service';
import { LeaveRequest } from 'src/app/models/leave-management/leave-request';

@Component({
  selector: 'app-leave-history',
  templateUrl: './leave-history.component.html',
  styleUrls: ['./leave-history.component.css']
})
export class LeaveHistoryComponent implements OnInit {

  displayedColumns: string[] = ['name','type', 'startdate', 'enddate', 'numberofdays', 'reason', 'status'];

  leavehistory: LeaveRequest[];
  dataSource = new MatTableDataSource<any>(this.leavehistory);


  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private leaveRequestService: LeaveRequestService) { }

  ngOnInit() {    
    this.getAllLeaveRequest();
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  getAllLeaveRequest() {
    this.leaveRequestService.getAllLeaveRequest().subscribe(data => {
      this.leavehistory = data;
      this.dataSource = new MatTableDataSource<any>(data);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      console.log(data);
    })
  }

}
