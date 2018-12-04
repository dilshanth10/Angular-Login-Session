import { LeaveAllocation } from './../../../../models/leave-management/leave-allocation';
import { LeaveAllocationService } from './../../../../services/leave-management/leave-allocation.service';
import { LeaveManagementInteractionService } from './../interaction-service/leave-management-interaction.service';
import { Component, OnInit } from '@angular/core';
import { LeaveRequestService } from 'src/app/services/leave-management/leave-request.service';
import { LeaveRequest } from 'src/app/models/leave-management/leave-request';


@Component({
  selector: 'app-apply-leave',
  templateUrl: './apply-leave.component.html',
  styleUrls: ['./apply-leave.component.css']
})
export class ApplyLeaveComponent implements OnInit {

  constructor(private leaveRequestService: LeaveRequestService, 
    private leaveAllocationService: LeaveAllocationService,
    private interactionService : LeaveManagementInteractionService
    ) { }

  today = new Date();
  leaveRequest = new LeaveRequest();
  leaveAllocation : LeaveAllocation[];
  user:string = "user";

  ngOnInit() {
    this.leaveRequest.noOfDays = 0;
    this.getLeaveAllocation();
  }

  createLeaveRequest() {
    this.leaveRequest.userName = this.user;
    this.leaveRequestService.addLeaveRequest(this.leaveRequest).subscribe(data => {
      this.clearAfterAdd();
      console.log(data);
    })
  }

  clearAfterAdd() {
    this.leaveRequest.reason = null;
    this.leaveRequest.leaveAllocation.id = null;
    this.leaveRequest.startDate = null;
    this.leaveRequest.endDate = null;
    this.leaveRequest.attachment = null;
    this.leaveRequest.userName = null;
    this.leaveRequest.noOfDays = 0;
  }

  getLeaveAllocation() {
    this.leaveAllocationService.getAllLeaveAllocationByUser(this.user).subscribe(data => {
      this.leaveAllocation = data;
      console.log(this.leaveAllocation);
    })
  }

  noOfDays(){
    if(this.leaveRequest.endDate != null && this.leaveRequest.startDate != null){
    var time = new Date(this.leaveRequest.endDate).getTime() - new Date(this.leaveRequest.startDate).getTime();
     this.leaveRequest.noOfDays = time / (1000 * 60 * 60 * 24) + 1;
    }
  }

  sendSuccessMsg() {
    this.interactionService.updateMsg("leaveRequestSuccess");
  }
}
