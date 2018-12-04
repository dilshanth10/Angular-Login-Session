import { Component, OnInit } from '@angular/core';
import { ViewProfessionalMembershipService } from '../../view-profile-info/view-professional-membership/view-professional-membership.service';
import { ViewProfessionalMembership } from '../../view-profile-info/view-professional-membership/view-professional-membership';
import { Profile } from '../../view-profile-info/profile-table/profile.model';
import { ProfileInfoService } from '../../view-profile-info/profile-table/profile-info.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-professional',
  templateUrl: './form-professional.component.html',
  styleUrls: ['./form-professional.component.css']
})
export class FormProfessionalComponent implements OnInit {
  
membershipObj:ViewProfessionalMembership=new ViewProfessionalMembership();
user:Profile[];

  constructor( 
    private professionalMembershipService: ViewProfessionalMembershipService,
    private userService:ProfileInfoService
    ) { }

  ngOnInit() {
    this.getUserId();
  }

  addprofForm = new FormGroup({
    empName: new FormControl('', Validators.compose([
      Validators.required,
      Validators.minLength(3)
    ])),
    university: new FormControl('', Validators.compose([
      Validators.required,
      Validators.minLength(3)
    ])),
    fromyear: new FormControl('', Validators.compose([
      Validators.required,
      Validators.minLength(4),
      Validators.maxLength(4),
      Validators.pattern("^[0-9]*$")
    ])),
    toyear: new FormControl('', Validators.compose([
      Validators.required,
      Validators.minLength(4),
      Validators.maxLength(4),
      Validators.pattern("^[0-9]*$")
    ])),
    eventtype: new FormControl('', Validators.compose([
      Validators.required,
      Validators.maxLength(50),
      Validators.minLength(3)
    ])),
    nameOfaward: new FormControl('', Validators.compose([
      Validators.required,
      Validators.maxLength(50),
      Validators.minLength(3)
    ]))
  });


  addProMembership(){
    
    return this.professionalMembershipService.createProMembership(this.membershipObj).subscribe(data=>{
      console.log(data);
      this.clear();
      
    })
  }
  getUserId(){
    return this.userService.getGenerelInfo().subscribe(data=>{
      this.user=data;
    })
  }

  clear() {
    this.membershipObj.eventName= null;
    this.membershipObj.periodYearTo = null;
    this.membershipObj.periodYearFrom = null;
    this.membershipObj.eventType = null;
    this.membershipObj.organizationName = null;
    this.membershipObj.user = null;
    this.membershipObj.award = null;
  }
}
