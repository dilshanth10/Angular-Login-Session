import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule,Routes} from '@angular/router';
import { MaterialModuleModule } from 'src/app/material-module.module';
import { PersonsInfoComponent } from './persons-info.component';



const routes:Routes=[
  {
  path:'',
  component:PersonsInfoComponent,
  children:[
    {
      path:'profileInfo',
      loadChildren:'../profiles/view-profile-info/view-profile-info.module#ViewProfileInfoModule'
    }
    ]
  }
]
@NgModule({
  imports: [
    CommonModule,
    MaterialModuleModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PersonsInfoComponent]
})
export class PersonsInfoModule { }
