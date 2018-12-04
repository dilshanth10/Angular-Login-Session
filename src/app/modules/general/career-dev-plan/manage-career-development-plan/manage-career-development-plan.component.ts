import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { CareerDevPlan } from '../Model/career-dev-plan';
import { CareerDevPlanService } from '../Service/career-dev-plan.service';
import { UserService } from '../Service/user.service';
import { User } from '../Model/user';

@Component({
  selector: 'app-manage-career-development-plan',
  templateUrl: './manage-career-development-plan.component.html',
  styleUrls: ['./manage-career-development-plan.component.css']
})
export class ManageCareerDevelopmentPlanComponent implements OnInit {

  careerDevPlan: CareerDevPlan[];
  careerDevPlanObj = new CareerDevPlan();
  plans: any;
  userObj=new User();
  users:User[];

  displayedColumns: string[] = ['plans', 'status','edit','delete'];
  cdp = [
    { 'plans':'WSO2', 'status':'Plan','edit':'','delete':'' },
    { 'plans':'Automation Exam', 'status':'1st Year completion','edit':'','delete':'' },
    { 'plans':'Project Management', 'status':'2nd Year completion','edit':'','delete':''},
    { 'plans':'Communication skills', 'status':'Failed','edit':'','delete':''}
  ]
  dataSource = new MatTableDataSource<any>(this.cdp);
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private careerDevPlanService:CareerDevPlanService,private userService:UserService) { }

  ngOnInit() {
    this.dataSource = new MatTableDataSource<any>(this.cdp);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.getCareerDevPlan();
    this.getUser();
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }


  getCareerDevPlan() {
    this.careerDevPlanService.getCareerDevPlan().subscribe(data => {
      this.careerDevPlan = data;
      console.log(data);
    })
  }

  createCareerDevPlan() {
    this.careerDevPlanService.createcareerDevPlan(this.careerDevPlanObj).subscribe(data => {
      console.log(data);
      this.getCareerDevPlan();
    })
  }

  getUser() {
    return this.userService.getUser().subscribe(
      data => {
        this.users = data;
        this.userObj.id=0;
      }
    )
  }
}
