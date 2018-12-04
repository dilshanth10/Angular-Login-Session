import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { Router } from '@angular/router';
import { ViewRecordOfEmploymentService } from './view-record-of-employment.service';
import { ViewRecordOfEmployment } from './view-record-of-employment.model';
import { ProfileInfoService } from '../profile-table/profile-info.service';

@Component({
  selector: 'app-view-record-of-employment',
  templateUrl: './view-record-of-employment.component.html',
  styleUrls: ['./view-record-of-employment.component.css']
})

export class ViewRecordOfEmploymentComponent implements OnInit {

  recodOfEmp:ViewRecordOfEmployment[];
  constructor(private router:Router,
    private viewRecordOfEmploymentService:ViewRecordOfEmploymentService,
    private profileInfoService:ProfileInfoService) { }

  // displayedColumns: string[] = ['role', 'status','period','name','leave','salary'];

  // role = [
  //   {  'roleName':'1', 'status': '','period':'','name':'','leave':'','salary':''},
  //   {  'roleName':'2', 'status': '','period':'','name':'','leave':'','salary':''},
  //   {  'roleName':'3', 'status': '','period':'','name':'','leave':'','salary':''} 
  // ]
  // dataSource = new MatTableDataSource<any>(this.role);


  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  

  ngOnInit() {
    // this.dataSource = new MatTableDataSource<any>(this.role);
    // this.dataSource.paginator = this.paginator;
    // this.dataSource.sort = this.sort;
    this.profileInfoService.profileuserObservable$.subscribe(userid => {
      this. GetRecordOfEmploymentByUserId(userid);
    })
    
  }
  GetRecordOfEmploymentByUserId(uid) {
    return this.viewRecordOfEmploymentService.getAllRecordOfEmpByUserId(uid).subscribe(data => {
      console.log(data);
      this.recodOfEmp = data;
    })
  }
  applyFilter(filterValue: string) {
    // this.dataSource.filter = filterValue.trim().toLowerCase();

    // if (this.dataSource.paginator) {
    //   this.dataSource.paginator.firstPage();
    // }
  }
  gotoNext(){
    this.router.navigate(['/profile/referees']);
  }
  goBack(){
    this.router.navigate(['/profile/ProfQual']);
  }

  getRecordOfEmp() {
    this.viewRecordOfEmploymentService.getAllRecordOfEmp().subscribe(data => {
      this.recodOfEmp = data;
      // this.dataSource = new MatTableDataSource<any>(this.professional);
      // this.dataSource.paginator = this.paginator;
      // this.dataSource.sort = this.sort;
      console.log(data);
    })

  }

}
