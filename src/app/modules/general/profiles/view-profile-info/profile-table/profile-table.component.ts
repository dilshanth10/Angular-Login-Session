import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { Router, ActivatedRoute } from '@angular/router';
import { Profile } from './profile.model';
import { ProfileInfoService } from './profile-info.service';
import { RefereesService } from '../view-referees/referees.service';


@Component({
  selector: 'app-profile-table',
  templateUrl: './profile-table.component.html',
  styleUrls: ['./profile-table.component.css']
})

export class ProfileTableComponent implements OnInit {
  
  userpassId
  employees: Profile[] ;

  displayedColumns: string[] = ['empName','empId', 'gender', 'email','contactNo','address', 'appointDate','role','manage'];

  profile = [
    {'empName':'john','empId':'1', 'gender':'male', 'email':'john11@gmail','contactNo':'0777725654','address':'jaffna', 'appointDate':'10/02/2018','role':'accountant','manage':''},
    {'empName':'rosh','empId':'2', 'gender':'female', 'email':'rosh@gmail','contactNo':'0772563547','address':'chavakachcheri', 'appointDate':'10/02/2018','role':'hr manager','manage':''}
   ]

  dataSource = new MatTableDataSource<any>(this.profile);


  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  
  constructor(private router:Router,
    private generalInfoService:ProfileInfoService,
    private refereeService:RefereesService,
    private route:ActivatedRoute) { }

  ngOnInit() {
    this.dataSource = new MatTableDataSource<any>(this.profile);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.getAllUser();
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  
  onClick(empId:number){
    this.userpassId = this.generalInfoService.useSelectedUserId(empId);
    this.router.navigate([empId],{relativeTo:this.route});
    
   }
   
   getAllUser(){
     this.generalInfoService.getGenerelInfo().subscribe(data=>{
       console.log(data);
      this.employees=data;
    })
  }
  
  getUserById(id){
    this.generalInfoService.getUserById(id).subscribe(data=>{
      
    })
  }
  GenralInfo(id){
    this.router.navigate(['emp']);
  }

}

