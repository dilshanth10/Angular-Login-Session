import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RefereesService } from '../../view-profile-info/view-referees/referees.service';
import { Referee } from '../../view-profile-info/view-referees/referee.model';
import { ProfileInfoService } from '../../view-profile-info/profile-table/profile-info.service';
import { Profile } from '../../view-profile-info/profile-table/profile.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-referees',
  templateUrl: './add-referees.component.html',
  styleUrls: ['./add-referees.component.css']
})
export class RefereesComponent implements OnInit {
  refObj:Referee=new Referee();
  userObj:Profile=new Profile();
  user:Profile[];
  constructor(private router: Router,
    private refereeService:RefereesService,
    private generalService:ProfileInfoService
    ) { }

    addUserForm = new FormGroup({
      email: new FormControl('', Validators.compose([
        Validators.required,
        // Validators.minLength(3),
        Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')
      ])),
      relationship: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(3),
        Validators.pattern('^[a-zA-Z]*$')
      ])),
      telephone: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(9),
        Validators.pattern('^[0-9]*$')
      ])),
      address: new FormControl('', Validators.compose([
        Validators.required,
        //Validators.minLength(3),
        // Validators.pattern('[a-z0-9._/\%+-]')
      ])),
      fullName: new FormControl('', Validators.compose([
        Validators.required,
        //Validators.minLength(3),
        // Validators.pattern('^[a-z]*$')
      ])),
      refereeName: new FormControl('', Validators.compose([
        Validators.required,
        //Validators.minLength(3),
        Validators.pattern('^[a-z]*$')
      ])),
    });
    

  ngOnInit() {
    this.getUserId()

  }
  addReferee(){
    // this.refObj.user=1;
    return this.refereeService.addReferee(this.refObj).subscribe(data=>{
      this.refObj=data;
    
    })
  }
  getUserId(){
    return this.generalService.getGenerelInfo().subscribe(data=>{
      this.user=data;
      console.log(data);
      // this.userObj.id=0;
    })
  }
  
  previous() {
    this.router.navigate(['/appointment/appointmentInformation/recordOfEmp']);
  }

  next() {
    this.router.navigate(['/appointment/appointmentInformation/attachment']);
  }

}
