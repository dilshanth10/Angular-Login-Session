import { Component, OnInit } from '@angular/core';
import { CareerDevPlanService } from '../../Service/career-dev-plan.service';
import { CareerDevPlan } from '../../Model/career-dev-plan';


@Component({
  selector: 'app-career-development-plan-form',
  templateUrl: './career-development-plan-form.component.html',
  styleUrls: ['./career-development-plan-form.component.css']
})
export class CareerDevelopmentPlanFormComponent implements OnInit {
  CareerDevPlanObj = new CareerDevPlan
  CareerDevPlan: CareerDevPlan[];
  msg: any;

  constructor(private careerDevPlanService: CareerDevPlanService) { }

  ngOnInit() {
  }

  createCareerDevPlan() {
    this.careerDevPlanService.createcareerDevPlan(this.CareerDevPlanObj).subscribe(data => {
      // this.getCareerDevPlan();
    });
  }


}
