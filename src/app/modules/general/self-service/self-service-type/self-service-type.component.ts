import { Component, OnInit } from '@angular/core';
import { SelfServiceType } from 'src/app/models/self-service/self-service-type';
import { SelfServiceTypeService } from 'src/app/services/self-service/self-service-type.service';
import { InteractionService } from 'src/app/services/interaction.service';



@Component({
  selector: 'app-self-service-type',
  templateUrl: './self-service-type.component.html',
  styleUrls: ['./self-service-type.component.css']
})
export class SelfServiceTypeComponent implements OnInit {

  selfServiceType: SelfServiceType[];
  selfServiceTypeObj = new SelfServiceType();
  msg: any;


  constructor(private selfServiceTypeService: SelfServiceTypeService, private interactionService: InteractionService) { }

  ngOnInit() {
    this.getSelfServiceType();

  }

  getSelfServiceType() {
    this.selfServiceTypeService.getAllSelfServiceType().subscribe(data => {
      this.selfServiceType = data;
      console.log(data);
    })
  }

  createSelfServiceType() {
    this.selfServiceTypeService.createSelfServiceType(this.selfServiceTypeObj).subscribe(data => {
      console.log(data);
      this.getSelfServiceType();
    })
  }

  getSelfServiceTypeById(selfServiceType) {
    this.interactionService.sendSelfServiceType(selfServiceType);
    console.log(selfServiceType);
    this.selfServiceTypeObj = Object.assign({}, this.selfServiceTypeObj);
  }

  deleteSelfServiceType() {
    this.selfServiceTypeService.deleteSelfServiceType(this.selfServiceTypeObj).subscribe(data => {
      console.log(data);
      this.getSelfServiceType();
      this.msg = "Delated successfully";
      this.getSelfServiceType();
    })
  }

}
