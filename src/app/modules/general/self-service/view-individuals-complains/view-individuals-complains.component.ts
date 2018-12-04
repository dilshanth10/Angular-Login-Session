import { Component, OnInit } from '@angular/core';
import { SelfServiceService } from 'src/app/services/self-service/self-service.service';
import { SelfService } from 'src/app/models/self-service/self-service';
import { UserService } from 'src/app/services/self-service/user.service';
import { InteractionService } from 'src/app/services/interaction.service';

@Component({
  selector: 'app-view-individuals-complains',
  templateUrl: './view-individuals-complains.component.html',
  styleUrls: ['./view-individuals-complains.component.css']
})
export class ViewIndividualsComplainsComponent implements OnInit {

  constructor(private selfServiceService: SelfServiceService, private userService: UserService, private interactionService: InteractionService) { }
  selfService: SelfService[];
  selfServiceObj = new SelfService();

  ngOnInit() {
    this.getSelfServiceByPendingStatus();

    this.interactionService.msgDataSource$.subscribe(data =>{
      this.getSelfServiceByPendingStatus();
    })
  }

  sendSelfServiceToModal(selfService) {
    console.log(selfService);
    this.selfServiceObj = selfService;
    this.selfServiceObj.status = "Accepted";
    this.interactionService.sendSelfService(this.selfServiceObj);
  }

  getSelfServiceByPendingStatus() {
    return this.selfServiceService.getSelfServiceByPendingStatus().subscribe(
      data => {
        this.selfService = data;
        console.log(data);
      })
  }

  rejectSelfService(selfService) {
    console.log(selfService);
    this.selfServiceObj = selfService;
    this.selfServiceObj.status = "Rejected";
    this.interactionService.sendSelfService(this.selfServiceObj);
  }
}
