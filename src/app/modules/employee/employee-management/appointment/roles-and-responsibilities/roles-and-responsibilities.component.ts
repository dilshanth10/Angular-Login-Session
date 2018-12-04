import { Component, OnInit } from '@angular/core';
import { RolesAndResponsibilitiesService } from 'src/app/modules/general/profiles/view-profile-info/view-roles-and-resposibilities/roles-and-responsibilities.service';
import { RolesAndResponsibilities } from 'src/app/modules/general/profiles/view-profile-info/view-roles-and-resposibilities/roles-and-responsibilities';
import { ProfileInfoService } from 'src/app/modules/general/profiles/view-profile-info/profile-table/profile-info.service';
import { Profile } from 'src/app/modules/general/profiles/view-profile-info/profile-table/profile.model';
import { JobService } from '../service/job.service';
import { KeyActivityService } from '../service/key-activity.service';
import { LocationService } from '../service/location.service';
import { KeyActivity } from '../models/key-activity.model';
import { Location } from '../models/location.model';
import { Job } from '../../../recruitment/Modal/job';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-roles-and-responsibilities',
  templateUrl: './roles-and-responsibilities.component.html',
  styleUrls: ['./roles-and-responsibilities.component.css']
})
export class RolesAndResponsibilitiesComponent implements OnInit {

  user:Profile[];
  keyActivity:KeyActivity[];
  locations:Location[];
  job:Job[];

  rolesandResObj:RolesAndResponsibilities=new RolesAndResponsibilities
  constructor(
    private rolesandResponsibilityService:RolesAndResponsibilitiesService,
    private userService:ProfileInfoService,
    private jobService:JobService,
    private keyactivityService:KeyActivityService,
    private locationService:LocationService,
    ) { }

  ngOnInit() {
    this.getUserId();
    this.getKeyActivityId();
    this. getJobId();
    this.getLocationId();
  }
  getKeyActivityId(){
    return this.keyactivityService.getAllKeyActivity().subscribe(data=>{
      this.keyActivity=data;
    })
  }
  getLocationId(){
    return this.locationService.getAllLocation().subscribe(data=>{
      this.locations=data;
    })  
  }
  getJobId(){
    return this.jobService.getAllJob().subscribe(data=>{
      this.job=data;
    })
  }
  getUserId(){
    return this.userService.getGenerelInfo().subscribe(data=>{
      this.user=data;
    })
  }

  addRolesAndResponsibilities(){
    return this.rolesandResponsibilityService.addRolesAndResponsibilities(this.rolesandResObj).subscribe(data=>{
      this.rolesandResObj=data;
      this.clear();
    })
  }

  clear() {
    this.rolesandResObj.user= null;
    this.rolesandResObj.job = null;
    this.rolesandResObj.keyActivity = null;
    this.rolesandResObj.location = null;
    this.rolesandResObj.responsibility = null;
    this.rolesandResObj.overAllPurpose = null;
  }

  addUserForm=new FormGroup({
    fullName:new FormControl('', Validators.compose([
      Validators.required,
    ])),
    job:new FormControl('', Validators.compose([
      Validators.required,
    ])),
    location:new FormControl('', Validators.compose([
      Validators.required,
    ])),
    key:new FormControl('', Validators.compose([
      Validators.required,
    ])),
    overAllPurpose: new FormControl('', Validators.compose([
      Validators.required,
      Validators.maxLength(150)
    ])),
    responsibility:new FormControl('', Validators.compose([
      Validators.required,
    ])),

  }

  )
}
