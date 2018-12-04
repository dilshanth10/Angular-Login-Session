import { LeaveManagementInteractionService } from './../../../interaction-service/leave-management-interaction.service';
import { LeaveRequestService } from './../../../../../../services/leave-management/leave-request.service';
import { Component, OnInit } from '@angular/core';
import { RejectLeave } from 'src/app/models/leave-management/reject-leave';

@Component({
  selector: 'app-leave-reject-modal',
  templateUrl: './leave-reject-modal.component.html',
  styleUrls: ['./leave-reject-modal.component.css']
})
export class LeaveRejectModalComponent implements OnInit {

  rejectObj: RejectLeave = new RejectLeave();
  constructor(private leaveRequestService: LeaveRequestService, private interactionService: LeaveManagementInteractionService) { }

  ngOnInit() {
    this.getLeaveRequestId();
  }

  rejectLeaverequest() {
    this.rejectObj.userName = "Admin";
    this.leaveRequestService.rejectLeaveRequest(this.rejectObj).subscribe(data => {
      console.log(data);
    })
  }

  getLeaveRequestId() {
    this.interactionService.leaveId$.subscribe(data => {
      this.rejectObj.leaveRequestId = data;
    })
  }

  sendSuccessMsg() {
    this.interactionService.updateMsg("success");
  }
}
