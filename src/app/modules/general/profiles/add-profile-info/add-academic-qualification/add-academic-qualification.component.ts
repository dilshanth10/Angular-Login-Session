import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AcademicQualificationService } from './academic-qualification.service';
import { AcademicQualification } from './academic-qualification.model';
import { Profile } from '../../view-profile-info/profile-table/profile.model';
import { ProfileInfoService } from '../../view-profile-info/profile-table/profile-info.service';
import { ExamType } from './exam-type.model';
import { ExamTypeService } from './exam-type.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-academic-qualification',
  templateUrl: './add-academic-qualification.component.html',
  styleUrls: ['./add-academic-qualification.component.css']
})
export class AcademicQualificationComponent implements OnInit {
  examtypes:ExamType[];
  academicObj:AcademicQualification=new AcademicQualification();
  user:Profile[];
 
  constructor(private router:Router,
    private examtypeService:ExamTypeService,
    private academicService:AcademicQualificationService,
    private userService:ProfileInfoService
    ) { }

     ngOnInit() {
          this.getUserId();
          this.getExamTypes();
        }
        addAcademicForm = new FormGroup({
          school: new FormControl('', Validators.compose([
            Validators.required,
            Validators.maxLength(50),
            Validators.minLength(3)
          ])),
          fromyear: new FormControl('', Validators.compose([
            Validators.required,
            Validators.minLength(4),
            Validators.maxLength(4),
            Validators.pattern("^[0-9]*$")
          ])),
          toyear: new FormControl('', Validators.compose([
            Validators.required,
            Validators.minLength(4),
            Validators.maxLength(4),
            Validators.pattern("^[0-9]*$")
          ])),
          resultOpt: new FormControl('', Validators.compose([
            Validators.required])),
            
            empName: new FormControl('', Validators.compose([
              Validators.required,
              ])),

            examType: new FormControl('', Validators.compose([
                Validators.required])),
          
              examYear: new FormControl('', Validators.compose([
                Validators.required,
                Validators.minLength(4),
                Validators.maxLength(4),
                Validators.pattern("^[0-9]*$")
              ])),
         });

      getUserId(){
        return this.userService.getGenerelInfo().subscribe(data=>{
          this.user=data;
        })
      }

    createAcademicQualification(){
      this.academicService.addAcademicQualification(this.academicObj)
      .subscribe(data=>{
        // console.log(data);
        // alert("created");
        // this.next();
        this.clear();
      })
    }

    getExamTypes(){
      return this.examtypeService.viewExamtypes().subscribe(data=>{
        this.examtypes=data;
      })
    }
    previous() {
      this.router.navigate(['/appointment/appointmentInformation/generalInfo']);
    }
  
    next() {
      this.router.navigate(['/appointment/appointmentInformation/professionalQualification']);
    }

    clear() {
      this.academicObj.examTypeId= null;
      this.academicObj.periodYearTo = null;
      this.academicObj.periodYearFrom = null;
      this.academicObj.result = null;
      this.academicObj.schoolName = null;
      this.academicObj.user = null;
      this.academicObj.examinationYear = null;
    }
  
}
