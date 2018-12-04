import { Component, OnInit } from '@angular/core';
import { CareerDevPlanService } from './Service/career-dev-plan.service';
import { CareerDevPlan } from './Model/career-dev-plan';

@Component({
  selector: 'app-career-dev-plan',
  templateUrl: './career-dev-plan.component.html',
  styleUrls: ['./career-dev-plan.component.css']
})
export class CareerDevPlanComponent implements OnInit {
  CareerDevPlanObj = new CareerDevPlan
  CareerDevPlan: CareerDevPlan[];
  msg: any;

  constructor(private careerDevPlanService: CareerDevPlanService) { }

  ngOnInit() {
    this.getCareerDevPlan();
  }

  
  getCareerDevPlan() {
    this.careerDevPlanService.getCareerDevPlan().subscribe(data => {
      this.CareerDevPlan = data;
    });
  }

  getCareerDevPlanByID(abc) {
    this.CareerDevPlanObj = Object.assign({}, abc);
    console.log(this.CareerDevPlanObj);
  }

  updateCareerDevPlan() {
    this.careerDevPlanService.updatecareerDevPlan(this.CareerDevPlanObj).subscribe(data => {
      this.getCareerDevPlan();
    })
  }

  deleteCareerDevPlan() {
    this.careerDevPlanService.deletecareerDevPlan(this.CareerDevPlanObj).subscribe(data => {
      this.getCareerDevPlan();
    });
  }
}

