import { LeaveManagementInteractionService } from './../interaction-service/leave-management-interaction.service';
import { Component, OnInit, ViewChild, OnChanges } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { LeaveRequest } from 'src/app/models/leave-management/leave-request';
import { LeaveRequestService } from 'src/app/services/leave-management/leave-request.service';
import { User } from '../../recruitment/Modal/user';

@Component({
  selector: 'app-view-specific-emp-leave',
  templateUrl: './view-specific-emp-leave.component.html',
  styleUrls: ['./view-specific-emp-leave.component.css']
})
export class ViewSpecificEmpLeaveComponent implements OnInit {

  displayedColumns: string[] = ['typeOfLeave', 'appliedOn', 'acceptedOrRejected', 'takenOn', 'reason', 'noOfDays', 'allocated', 'balance'];

  specificLeaveDetails: LeaveRequest[];

  dataSource = new MatTableDataSource<any>(this.specificLeaveDetails);
  user = new User();

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private interactionService: LeaveManagementInteractionService, private leaveRequestService: LeaveRequestService) { }

  ngOnInit() {
    this.getUser();
  }
  getUser() {
    this.interactionService.user$.subscribe(data => {
      this.user = data;
      this.getAllSpecificLeaveRequest();
      console.log(this.user);
    })
  }
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
    this.dataSource.paginator.firstPage();
  }

  getAllSpecificLeaveRequest() {
    this.leaveRequestService.getAllLeaveRequestByUser(this.user.id).subscribe(data => {
      this.specificLeaveDetails = data;
      this.dataSource = new MatTableDataSource<any>(data);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      console.log(data);
    })
  }

  sendSuccessMsg() {
    this.interactionService.updateMsg("success");
  }
}