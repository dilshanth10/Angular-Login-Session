import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProfileInfoService } from '../../view-profile-info/profile-table/profile-info.service';
import { Profile } from '../../view-profile-info/profile-table/profile.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-add-general-information',
  templateUrl: './add-general-information.component.html',
  styleUrls: ['./add-general-information.component.css']
})
export class GeneralInformationComponent implements OnInit {
  proObj:Profile=new Profile();
  constructor(private router: Router, 
    private profileser:ProfileInfoService) { }

  ngOnInit() {
   
  }
  
  addUserForm = new FormGroup({
    religion: new FormControl('', Validators.compose([
      Validators.required,
      Validators.minLength(3),
      Validators.pattern('^[a-zA-Z]*$')

    ])),
    email: new FormControl('', Validators.compose([
      Validators.required,
      //Validators.minLength(3),
      Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')
    ])),
    fullName: new FormControl('', Validators.compose([
      Validators.required,
      Validators.minLength(3),
      Validators.pattern('^[a-zA-Z]*$')
      // Validators.pattern('[a-z]')
    ])),
    employeeName: new FormControl('', Validators.compose([
      Validators.required,
      Validators.minLength(3),
      Validators.pattern('^[a-zA-Z]*$')
      // Validators.pattern('[a-z]')
    ])),
    nationality: new FormControl('', Validators.compose([
      Validators.required,
      Validators.minLength(3),
      Validators.pattern('^[a-zA-Z]*$')
      // Validators.pattern('[a-z]')
    ])),
    nic: new FormControl('', Validators.compose([
      Validators.required,
      Validators.minLength(9),
      Validators.pattern('[0-9]+v')
    ])),
    date: new FormControl('', Validators.compose([
      Validators.required,
      //Validators.minLength(3)
    ])),
    dateofbirth: new FormControl('', Validators.compose([
      Validators.required,
      //Validators.minLength(3)
    ])),
    gender: new FormControl('', Validators.compose([
      Validators.required,
      //Validators.minLength(3)
    ])),
    permanentaddress: new FormControl('', Validators.compose([
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(150)
    ])),
    residentialAddress: new FormControl('', Validators.compose([
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(150)
    ])),
    mobile: new FormControl('', Validators.compose([
      Validators.required,
      Validators.minLength(9),
      Validators.pattern('^[0-9]*$')
    ])),
    telephoneNumber: new FormControl('', Validators.compose([
      Validators.required,
      Validators.minLength(9),
      Validators.pattern('^[0-9]*$')

    ])),
    maritalStatus: new FormControl('', Validators.compose([
      Validators.required,
      Validators.minLength(3),
      Validators.pattern('^[a-zA-Z]*$')      
    ])),
  });



  addProfileGeneralInfo(){
    
    return this.profileser.addGeneralInfo(this.proObj).subscribe(data=>{
      console.log(data);
      // alert("added")
      this.next();
    })
  }

  next() {
    this.router.navigate(['/appointment/appointmentInformation/academicInfo']);
  }

}
