import { Component, OnInit } from '@angular/core';
import { ViewProfessionalMembership } from './view-professional-membership';
import { ViewProfessionalMembershipService } from './view-professional-membership.service';
import { Router } from '@angular/router';
import { ProfileInfoService } from '../profile-table/profile-info.service';

@Component({
  selector: 'app-view-professional-membership',
  templateUrl: './view-professional-membership.component.html',
  styleUrls: ['./view-professional-membership.component.css']
})
export class ViewProfessionalMembershipComponent implements OnInit {
  memberships:ViewProfessionalMembership[];

  constructor(private router: Router, 
    private profileInfoService:ProfileInfoService,
    private professionalMembershipService: ViewProfessionalMembershipService) { }

  ngOnInit() {
    this.profileInfoService.profileuserObservable$.subscribe(userId=>{
      this.getProMembershipByUserId(userId);
    })
  }

  getProMembershipByUserId(uid){
    this.professionalMembershipService.getProMembershipByUserId(uid).subscribe(data=>{
      this.memberships=data;
      console.log(data);
    })
  }
  getProMembership(){
    this.professionalMembershipService.getAllProMembership().subscribe(data=>{
      this.memberships=data;
      console.log(data);
    })
  }

}
