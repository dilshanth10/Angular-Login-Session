import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Referee } from './referee.model';
import { RefereesService } from './referees.service';
import { ProfileInfoService } from '../profile-table/profile-info.service';
@Component({
  selector: 'app-view-referees',
  templateUrl: './view-referees.component.html',
  styleUrls: ['./view-referees.component.css']
})

export class ViewRefereesComponent implements OnInit {

  referees: Referee[]
  constructor(private router:Router,
    private refereeService:RefereesService,
    private profileInfoService:ProfileInfoService ) { }
   
    
  ngOnInit() {

    this.profileInfoService.profileuserObservable$.subscribe(userid=>{
      console.log(userid);
    this.GetRefereeByUserId(userid);
   // this.GetReferee();
   });
   
  }
  GetReferee(){
    return this.refereeService.getReferee().subscribe(data=>{
      this.referees=data;
    })
  }
  
  GetRefereeByUserId(uid){
   return this.refereeService.GetRefereeByUserId(uid).subscribe(data=>{
     this.referees=data;
   })
  }
  
  gotoNext(){
    this.router.navigate(['/profile/rolesAndResponse']);
  }
  goBack(){
    this.router.navigate(['/profile/recordEmp']);
  }

}
