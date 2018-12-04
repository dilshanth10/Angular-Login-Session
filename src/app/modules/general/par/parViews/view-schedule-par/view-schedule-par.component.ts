import { Component, OnInit } from '@angular/core';
import { ScheduleParService } from '../../services/schedule-par.service';
import { Par } from '../../models/par.model';
import { ScheduleParAppraisors } from '../../models/schedule-par-appraisors.model';

@Component({
  selector: 'app-view-schedule-par',
  templateUrl: './view-schedule-par.component.html',
  styleUrls: ['./view-schedule-par.component.css']
})
export class ViewScheduleParComponent implements OnInit {

  parArray: Par[];
  parDataArray:Par=new Par();
  

  constructor(private scheduleParService: ScheduleParService) { }

  ngOnInit() {
    this.scheduleParService.getSchedulePar().subscribe(data => {
      this.parArray = data;
      
    },
      err => (console.log(err))
    )
  }

  viewSchedulePar(parId) {
    //alert(parId);
    this.scheduleParService.getScheduleParData(parId).subscribe(data=>{
      this.parDataArray=data;
      
    },
    err=>(console.log(err)))
  }

}
