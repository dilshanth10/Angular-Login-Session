import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ViewBenefitsAllowances } from '../Model/view-benefits-allowances';

@Injectable({
  providedIn: 'root'
})
export class ViewBenefitsAllowancesService {

  private benefitsAllowancesUrl='http://localhost:8080/hrm_system/benefits';

  constructor(private http:HttpClient) { }

  public getBenefitsAllowances():Observable<ViewBenefitsAllowances[]>{
    return this.http.get<ViewBenefitsAllowances[]>(this.benefitsAllowancesUrl);
  }
}
