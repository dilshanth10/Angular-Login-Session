import { Component, OnInit } from '@angular/core';
import { CarryforwardLeaveRequestService } from 'src/app/services/leave-management/carryforward-leave-request.service';
import { CarryforwardLeaveRequest } from 'src/app/models/leave-management/carryforward-leave-request';

@Component({
  selector: 'app-carry-forward-leave-request',
  templateUrl: './carry-forward-leave-request.component.html',
  styleUrls: ['./carry-forward-leave-request.component.css']
})
export class CarryForwardLeaveRequestComponent implements OnInit {

  constructor(private carryforwardRequestService: CarryforwardLeaveRequestService) { }

  carryforwardRequest = new CarryforwardLeaveRequest();


  ngOnInit() {
    this.carryforwardRequest.userName = "test";
    // this.carryforwardRequest.user.userName = "test";
    this.getCarryforwardLeaveRequest()
  }

  createCarryforwardLeaveRequest() {
    this.carryforwardRequestService.addCarryforwardLeaveRequest(this.carryforwardRequest).subscribe(data => {
    this.clearAfterAdd();
    })
  }

  getCarryforwardLeaveRequest() {
    this.carryforwardRequestService.getCarryforwardLeaveRequest().subscribe(data => {
      console.log(data);
    })
  }
  
  clearAfterAdd() {
    this.carryforwardRequest.carryforwardDays = null;
  }
}
