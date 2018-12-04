import { Component, OnInit } from '@angular/core';
import { Accept } from 'src/app/models/leave-management/accept';
import { LeaveRequestService } from 'src/app/services/leave-management/leave-request.service';
import { LeaveManagementInteractionService } from '../../../interaction-service/leave-management-interaction.service';

@Component({
  selector: 'app-leave-accept-modal',
  templateUrl: './leave-accept-modal.component.html',
  styleUrls: ['./leave-accept-modal.component.css']
})
export class LeaveAcceptModalComponent implements OnInit {

  constructor(private leaveRequestService: LeaveRequestService, private interactionService: LeaveManagementInteractionService) { }

  ngOnInit() {
    this.getLeaveRequestId();
  }

  acceptObj = new Accept();


  acceptLeaverequest() {
    this.acceptObj.userName = "Admin";
    this.leaveRequestService.acceptLeaveRequest(this.acceptObj).subscribe(data => {

    })
  }

  getLeaveRequestId() {
    this.interactionService.leaveId$.subscribe(data =>{
        this.acceptObj.leaveRequestId = data;
    })
  }
  sendSuccessMsg() {
    this.interactionService.updateMsg("success");
  }
}
