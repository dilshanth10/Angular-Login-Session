import { Injectable } from '@angular/core';
import { ParAppraisor } from '../models/par-appraisor.model';
import { HttpClient } from '@angular/common/http';
import { SchedulePar } from '../models/schedule-par.model';
import { Par } from '../models/par.model';

@Injectable({
  providedIn: 'root'
})
export class ScheduleParService {

  constructor(private http: HttpClient){}

  private sheduleparUrl = 'http://localhost:8080/hrm_system/schedulepar';

  public addSchedulePar(par) {
    return this.http.post<SchedulePar>(this.sheduleparUrl,par);
  }

  public getSchedulePar() {
    return this.http.get<Par[]>(this.sheduleparUrl);
  }

  public getScheduleParData(parId) {
    return this.http.get<Par>(this.sheduleparUrl+"/par/"+parId);
  }
}
