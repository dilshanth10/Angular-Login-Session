import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PromotionComponent } from './promotion.component';
import { Routes, RouterModule } from '@angular/router';
import { MaterialModuleModule } from 'src/app/material-module.module';
import { PromotionEligibilityComponent } from './promotion-eligibility/promotion-eligibility.component';
import { PromotionEligibilityCreditCheckComponent } from './promotion-eligibility/promotion-eligibility-credit-check/promotion-eligibility-credit-check.component';
import { PromotionHistoryComponent } from './promotion-history/promotion-history.component';
import { EduQualListComponent } from './promotion-eligibility/promotion-eligibility-credit-check/modal/edu-qual-list/edu-qual-list.component';
import { ParHistListComponent } from './promotion-eligibility/promotion-eligibility-credit-check/modal/par-hist-list/par-hist-list.component';
import { LeaveHistListComponent } from './promotion-eligibility/promotion-eligibility-credit-check/modal/leave-hist-list/leave-hist-list.component';
import { PromotionDeniedHistoryComponent } from './promotion-denied-history/promotion-denied-history.component';
import { EditPromotionHistoryComponent } from './promotion-history/modal/edit-promotion-history/edit-promotion-history.component';
import { EditPromotionDeniedHistoryComponent } from './promotion-denied-history/modal/edit-promotion-denied-history/edit-promotion-denied-history.component';
import { AddPromotionComponent } from './promotion-eligibility/promotion-eligibility-credit-check/modal/add-promotion/add-promotion.component';
import { AddDeniedPromotionComponent } from './promotion-eligibility/promotion-eligibility-credit-check/modal/add-denied-promotion/add-denied-promotion.component';
import { RequestPromotionComponent } from './request-promotion/request-promotion.component';
import { FormsModule } from '@angular/forms';
import { RequestPromotionModalComponent } from './request-promotion/modal/request-promotion-modal/request-promotion-modal.component';

const routes:Routes=[
  {
    path:'',
   component:PromotionComponent,
   children:[
    {
      path: 'RequestPromotion',
      component: RequestPromotionComponent
    },
    {
      path: 'RequestHistory',
      component: PromotionEligibilityComponent
    },
    {
      path: 'PromotionHistory',
      component: PromotionHistoryComponent
    },
    {
      path: 'DeniedHistory',
      component: PromotionDeniedHistoryComponent
    }
  ]

  }
]
@NgModule({
  imports: [
    CommonModule,
    MaterialModuleModule,
    FormsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PromotionComponent, PromotionEligibilityComponent,  PromotionEligibilityCreditCheckComponent,  PromotionHistoryComponent, EduQualListComponent, ParHistListComponent, LeaveHistListComponent, PromotionDeniedHistoryComponent, EditPromotionHistoryComponent, EditPromotionDeniedHistoryComponent, AddPromotionComponent, AddDeniedPromotionComponent, RequestPromotionComponent, RequestPromotionModalComponent]
})
export class PromotionModule { }
