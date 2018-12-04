import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { LeaveRequest } from 'src/app/models/leave-management/leave-request';
import { LeaveManagementInteractionService } from '../interaction-service/leave-management-interaction.service';
import { LeaveRequestService } from 'src/app/services/leave-management/leave-request.service';

@Component({
  selector: 'app-approve-leave',
  templateUrl: './approve-leave.component.html',
  styleUrls: ['./approve-leave.component.css']
})
export class ApproveLeaveComponent implements OnInit {

  displayedColumns: string[] = ['name','department','startdate','enddate','numberofdays','type','reason','accept/reject'];

  leave : LeaveRequest[];
  dataSource = new MatTableDataSource<any>(this.leave);


  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private leaveRequestService: LeaveRequestService, private interactionService : LeaveManagementInteractionService) { }

  ngOnInit() {
    this.interactionService.msg$.subscribe(data=>{
      this.getAllLeaveRequest();
      console.log(data);
    })
    this.getAllLeaveRequest();    
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  getAllLeaveRequest() {
    this.leaveRequestService.getPendingLeaveRequest().subscribe(data => {
      this.leave = data;
      this.dataSource = new MatTableDataSource<any>(data);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      console.log(data);
    })
  }

  sentLeaveId(leaveId){
    this.interactionService.setLeaveId(leaveId);
  }

  sendUserId(user) {
    this.interactionService.sendUserId(user);
  }
}
