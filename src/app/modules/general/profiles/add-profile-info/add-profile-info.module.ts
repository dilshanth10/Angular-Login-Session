import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AddProfileInfoComponent } from './add-profile-info.component';
import { GeneralInformationComponent } from './add-general-information/add-general-information.component';
import { AcademicQualificationComponent } from './add-academic-qualification/add-academic-qualification.component';
import { ProfessionalQualificationComponent } from './add-professional-qualification/add-professional-qualification.component';
import { RecordOfEmploymentComponent } from './add-record-of-employment/add-record-of-employment.component';
import { RefereesComponent } from './add-referees/add-referees.component';
import { AttachmentComponent } from './add-attachment/add-attachment.component';
import { MaterialModuleModule } from 'src/app/material-module.module';
import { FormUniversityComponent } from './form-university/form-university.component';
import { FormProfessionalComponent } from './form-professional/form-professional.component';
import { FormsModule } from '@angular/forms';


import { HttpClientModule } from '@angular/common/http';


import { AcademicQualificationService } from './add-academic-qualification/academic-qualification.service';


const routes: Routes = [
  {
    path: '', component: AddProfileInfoComponent,
    children: [
      { path: 'generalInfo', component: GeneralInformationComponent },
      { path: 'academicInfo', component: AcademicQualificationComponent },
      { path: 'professionalQualification', component: ProfessionalQualificationComponent },
      { path: 'recordOfEmp', component: RecordOfEmploymentComponent },
      { path: 'referees', component: RefereesComponent },
      { path: 'attachment', component: AttachmentComponent }
    ]
  }
]

@NgModule({
  imports: [
    CommonModule,
    MaterialModuleModule,
    RouterModule.forChild(routes),
    FormsModule,
    HttpClientModule,
  ],
  declarations: [
    AddProfileInfoComponent,
    GeneralInformationComponent,
    AcademicQualificationComponent,
    ProfessionalQualificationComponent,
    RecordOfEmploymentComponent,
    RefereesComponent,
    AttachmentComponent,
    FormUniversityComponent,
    FormProfessionalComponent
  ],
  providers: [AcademicQualificationService]
})

export class AddProfileInfoModule { }
