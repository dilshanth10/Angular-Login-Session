import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CareerDevPlan } from '../Model/career-dev-plan';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class CareerDevPlanService {

  constructor(private httpObj: HttpClient) { }
  private careerDevPlanUrl = "http://localhost:8080/hrm_system/usercareerdevelopmentplancompany";

  private careerDevPlanUrlPost = "http://localhost:8080/hrm_system/usercareerdevelopmentplancompanysave";



  public getCareerDevPlan() {
    return this.httpObj.get<CareerDevPlan[]>(this.careerDevPlanUrl);

  }
  public createcareerDevPlan(careerDevPlan) {
    return this.httpObj.post<CareerDevPlan>(this.careerDevPlanUrlPost, careerDevPlan);

  }
  public updatecareerDevPlan(careerDevPlan) {
    return this.httpObj.put<CareerDevPlan>(this.careerDevPlanUrl + "/" + careerDevPlan.id, careerDevPlan);
  }

  public deletecareerDevPlan(careerDevPlan) {
    return this.httpObj.delete<CareerDevPlan>(this.careerDevPlanUrl + "/" + careerDevPlan.id, careerDevPlan);
  }

}

