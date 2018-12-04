import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import { Router } from '@angular/router';
import { AccademicQualificationService } from './accademic-qualification.service';
import { AcademicQualification } from './academic-qualification';
import { ProfileInfoService } from '../profile-table/profile-info.service';

@Component({
  selector: 'app-view-academic-qualification',
  templateUrl: './view-academic-qualification.component.html',
  styleUrls: ['./view-academic-qualification.component.css']
})

export class ViewAcademicQualificationComponent implements OnInit {

  academicQualifications: AcademicQualification[];


  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private router: Router,
    private academicService: AccademicQualificationService,
    private profileInfoService: ProfileInfoService) { }


  ngOnInit() {

    this.profileInfoService.profileuserObservable$.subscribe(userid => {
      this.GetAcademicQualificationByUserId(userid);
    })
  }
  GetAcademicQualificationByUserId(uid) {
    return this.academicService.getAcademicQualificationByUserId(uid).subscribe(data => {
      console.log(data);
      this.academicQualifications = data;
    })
  }

  // getAllAcademicQualification() {
  //   this.academicService.getAcademicQualification().subscribe(data => {
  //     this.academicQualifications = data;
  //   })
  // }
  gotoNext() {
    this.router.navigate(['/profile/ProfQual']);
  }

  goBack() {
    this.router.navigate(['/profile/genInf']);
  }
}
