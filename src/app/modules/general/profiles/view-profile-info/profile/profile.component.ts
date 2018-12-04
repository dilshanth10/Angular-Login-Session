import { Component, OnInit } from '@angular/core';
import { Profile } from '../profile-table/profile.model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  
  // employees: Profile[] = [
  //   {
  //     empName: 'john',
  //     empId: 1,
  //     gender: 'male',
  //     email: 'john11@gmail',
  //     contactNo: '0777725654',
  //     address: 'jaffna',
  //     appointDate: new Date('10/02/2018'),
  //     role: 'accountant',
  //     photoPath: '../../../../../../assets/images/john.jfif',
  //     nationality: 'Srilankan Tamil',
  //     nic: '921961464v',
  //     religion: 'Hindu',
  //     dateOfBirth: new Date('12/02/2018'),
  //     addressR: 'jaffna',
  //     contactNoR: '0212222456',
  //     maritalStatus: 'Single',
  //     basicSalary: '40000',
  //     blg:'O+'
  //   }
  // ]
  

 

  ngOnInit() {
  }
 

}
