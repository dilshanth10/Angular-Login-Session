import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrainerManagementComponent } from './trainer-management.component';
import { PaymentHistoryComponent } from './payment-history/payment-history.component';
import { AvailabilityComponent } from './availability/availability.component';
import { PaymentFormComponent } from './payment-form/payment-form.component';
import { AvailabilityFormComponent } from './availability-form/availability-form.component';
import { RouterModule, Routes } from '@angular/router';
import { MaterialModuleModule } from 'src/app/material-module.module';
import { TrainingHistoryComponent } from './training-history/training-history.component';
import { ViewTrainingHistoryComponent } from './training-history/view-training-history/view-training-history.component';
import { AddTrainingHistoryComponent } from './training-history/add-training-history/add-training-history.component';
import { TrainingHistoryService } from 'src/app/services/training-history/training-history.service';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: 'training-history',
    component: TrainerManagementComponent
  }
];
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MaterialModuleModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    TrainerManagementComponent,
    PaymentHistoryComponent,
    AvailabilityComponent,
    PaymentFormComponent,
    AvailabilityFormComponent,
    TrainingHistoryComponent,
    ViewTrainingHistoryComponent,
    AddTrainingHistoryComponent
  ],
  providers: [TrainingHistoryService]
})
export class TrainerManagementModule { }
