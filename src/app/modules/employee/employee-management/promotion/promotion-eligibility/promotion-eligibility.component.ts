import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { RequestPromotion } from '../models/request-promotion';
import { RequestPromotionService } from '../services/request-promotion.service';
import { Designation } from '../models/designation';
import { User } from 'src/app/models/self-service/user';
import { UserService } from 'src/app/services/self-service/user.service';

@Component({
  selector: 'app-promotion-eligibility',
  templateUrl: './promotion-eligibility.component.html',
  styleUrls: ['./promotion-eligibility.component.css']
})
export class PromotionEligibilityComponent implements OnInit {
  requestpro:RequestPromotion[];
  users:User[];
  desig:Designation[];
  msg:any;
  reqPromotion: any;

  displayedColumns: string[] = ['id', 'userId','designationId','recommendedBy','promotionRemark','createdAt','check'];

  // PromotionEligibility = [
  //   { 'proReqId':'001', 'emplID':'01' ,'desiglID':'01','recBy':'r1','remark':'AE','promoteddate':'10-08-2018','check':'' },
  //   { 'proReqId':'002', 'emplID':'02' ,'desiglID':'02','recBy':'r2','remark':'SE','promoteddate':'10-09-2018','check':'' },
  //   { 'proReqId':'003', 'emplID':'03' ,'desiglID':'02','recBy':'r3','remark':'ASE','promoteddate':'10-10-2018','check':'' },
  //   { 'proReqId':'004', 'emplID':'04' ,'desiglID':'02','recBy':'r4','remark':'AE','promoteddate':'10-11-2018','check':'' },
  //   { 'proReqId':'005', 'emplID':'05' ,'desiglID':'02','recBy':'r5','remark':'ASE','promoteddate':'10-12-2018','check':'' }
    
  // ]
  dataSource = new MatTableDataSource<any>(this.reqPromotion);


  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private reqProService:RequestPromotionService,private userService:UserService) { }

  ngOnInit() {
    this.getAllRequestPromotionList();
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  getAllRequestPromotionList() {
    this.reqProService.getAllPromotionRequest().subscribe(data => {
      this.reqPromotion = data;
      this.dataSource = new MatTableDataSource<any>(this.reqPromotion);
    
      console.log(data);
    });
  }
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  
}
