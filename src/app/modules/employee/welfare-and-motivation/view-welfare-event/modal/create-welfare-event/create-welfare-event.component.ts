import { Component, OnInit } from '@angular/core';
import { WelfareEventService } from '../../../Service/welfare-event.service';
import { WelfareEvent } from '../../../Model/welfare-event';
@Component({
  selector: 'app-create-welfare-event',
  templateUrl: './create-welfare-event.component.html',
  styleUrls: ['./create-welfare-event.component.css']
})
export class CreateWelfareEventComponent implements OnInit {
  welfareEventObj = new WelfareEvent;
  welfareEvent: WelfareEvent[];
  

  constructor(private welfareEventService: WelfareEventService) { }

  ngOnInit() {

    
  }
  addWelfareEvent(){
    this.welfareEventObj.promoteDate = new Date();
    this.welfareEventService.createWelfareEvent(this.welfareEventObj).subscribe(data=>{
  alert("welfare Event added");
    });
  
    
  }
  
  
  }

