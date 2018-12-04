import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort, MatPaginator, MatTableDataSource } from '@angular/material';
import { PlanVacancyService } from '../Service/plan-vacancy.service';
import { PlanVacancy } from '../Modal/plan-vacancy';
import { RecruitmentType } from '../Modal/recruitment-type';
import { Department } from '../Modal/department';
import { User } from 'src/app/models/employee-termination/user';
import { Job } from '../Modal/job';
import { DepartmentService } from '../Service/department.service';
import { RecruitmentTypeService } from '../Service/recruitment-type.service';
import { UserService } from '../Service/user.service';
import { JobService } from '../Service/job.service';

@Component({
  selector: 'app-view-plan-vacancies',
  templateUrl: './view-plan-vacancies.component.html',
  styleUrls: ['./view-plan-vacancies.component.css']
})
export class ViewPlanVacanciesComponent implements OnInit {
  // planVacancyObj: PlanVacancy = new PlanVacancy();
   planVacancy: PlanVacancy[];
  // recruitmentType:RecruitmentType[];
  // department: Department[];
  // user:User[];
  // job: Job[];
  // EditplanVacancyObj: PlanVacancy = new PlanVacancy();
  msg:any;

  displayedColumns: string[] = ['view', 'title', 'referencenumber',  'no', 'department', 'salary',  'button'];

  // plan = [
  //   { 'view':'','title': 'Manager', 'referencenumber': '1',  'no': '2', 'department': 'HR', 'salary': '10000.00',  'button': '' }
  // ]

  plan:any;

  dataSource = new MatTableDataSource<any>(this.plan);


  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private planVacancyService: PlanVacancyService,
    private departmentService: DepartmentService,
    private recruitmentTypeService: RecruitmentTypeService,
    private userService: UserService,
    private jobService: JobService, ) { }

  ngOnInit() {
    this.getAllPlanVacancyList();
    // this.getAllRecruitmentTypeList();
    // this.getAllDepartmentList();
    // this.getAllUserList();
    // this.getAllJobList();
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  getAllPlanVacancyList() {
    this.planVacancyService.getAllPlanVacancy().subscribe(data => {
    this.plan = data;
    this.dataSource = new MatTableDataSource<any>(this.plan);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    console.log(data);
    });
}
// getAllRecruitmentTypeList() {
//   this.recruitmentTypeService.getAllRecruitmentType().subscribe(data => {
//   this.recruitmentType = data;
//   this.dataSource = new MatTableDataSource<any>(this.recruitmentType);
//   this.dataSource.paginator = this.paginator;
//   this.dataSource.sort = this.sort;
//   console.log(data);
//   });
// }
// getAllDepartmentList() {
//   this.departmentService.getAllDepartment().subscribe(data => {
//   this.department = data;
//   this.dataSource = new MatTableDataSource<any>(this.department);
//   this.dataSource.paginator = this.paginator;
//   this.dataSource.sort = this.sort;
//   console.log(data);
//   });
// }
// getAllUserList() {
//   this.userService.getAllUser().subscribe(data => {
//   this.user = data;
//   this.dataSource = new MatTableDataSource<any>(this.user);
//   this.dataSource.paginator = this.paginator;
//   this.dataSource.sort = this.sort;
//   console.log(data);
//   });
// }
// getAllJobList() {
//   this.jobService.getAllJob().subscribe(data => {
//   this.job = data;
//   this.dataSource = new MatTableDataSource<any>(this.job);
//   this.dataSource.paginator = this.paginator;
//   this.dataSource.sort = this.sort;
//   console.log(data);
//   });
// }
}