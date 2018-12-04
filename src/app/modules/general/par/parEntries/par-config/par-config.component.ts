import { Component, OnInit } from '@angular/core';
import { ParConfig } from '../../models/par-config.model';
import { FormControl, FormGroup } from '@angular/forms';
import { ParconfigService } from '../../services/parconfig.service';

@Component({
  selector: 'app-par-config',
  templateUrl: './par-config.component.html',
  styleUrls: ['./par-config.component.css']
})
export class ParConfigComponent implements OnInit {

  parContentArray:ParConfig[];
  parContent:ParConfig=new ParConfig()

  formParContent=new FormGroup({
    ContentId:new FormControl(),
    contentName:new FormControl()
  })




  constructor(private  parconfigService: ParconfigService) { }

  ngOnInit() {

    
     
  }
  public addParConfig(){
  this.parconfigService.addParConfig(this.parContent).subscribe(data=>{
    console.log(data);
    alert("data inserted successfully")
    
  });
}

}
