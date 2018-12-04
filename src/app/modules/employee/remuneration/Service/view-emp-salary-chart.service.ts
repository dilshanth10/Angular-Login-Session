import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {ViewEmpSalaryChart} from '../Model/view-emp-salary-chart';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ViewEmpSalaryChartService {

  private salaryChartUrl='http://localhost:8080/hrm_system/salarychart';
  constructor(private http: HttpClient ){}

  public getSalaryChart(): Observable<ViewEmpSalaryChart[]>{
    return this.http.get<ViewEmpSalaryChart[]>(this.salaryChartUrl);  
  }

  public getSalaryChartByName(name): Observable<ViewEmpSalaryChart[]>{
    return this.http.get<ViewEmpSalaryChart[]>(this.salaryChartUrl+"/search?name="+name);  
  }
  public getSalaryChartEmployeeById(id): Observable<ViewEmpSalaryChart> {
    return this.http.get<ViewEmpSalaryChart>(this.salaryChartUrl+"/"+id);  
  }
}
