import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { Profile } from './profile.model';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';


const httpOption = {
  headers: new HttpHeaders({'Content-Type':'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class ProfileInfoService {

  constructor(private httpObj:HttpClient) { }
  private prourl = "http://localhost:8080/hrm_system/user";

  public getGenerelInfo(){
    return this.httpObj.get<Profile[]>(this.prourl);
  }
  public addGeneralInfo(data){
    return this.httpObj.post<Profile>(this.prourl,data);
  }
  
  // start userId pass in these code
  private profileuserObservable = new BehaviorSubject<Number>(null);
  profileuserObservable$ = this.profileuserObservable.asObservable();

  
  useSelectedUserId(userId: number){
    this.profileuserObservable.next(userId);
  }
   // end userId pass in these code
  public getUserById(id){
    return this.httpObj.get<Profile[]>(this.prourl+"/"+id);
  }
}
