import { Component, OnInit } from '@angular/core';
import { ParconfigService } from '../../services/parconfig.service';
import { ParConfig } from '../../models/par-config.model';
import { FormArray, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-par-appraisee-report',
  templateUrl: './par-appraisee-report.component.html',
  styleUrls: ['./par-appraisee-report.component.css']
})
export class ParAppraiseeReportComponent implements OnInit {

  parConfigArray:ParConfig[];
 
  // formParConfig=new FormGroup({
  //   'content':new FormArray([
    
  //   ])
  // })

  constructor(private parConfigService:ParconfigService) { }

  ngOnInit() {
    this.getdata();

  }

  // createParContent(){
  //   return
  // }

  getdata(){
    this.parConfigService.getParConfig().subscribe(data=>{
      console.log(data);
 this.parConfigArray=data;
    })
  }


}
