import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { EmpViewLoanDetailsService } from '../../Service/emp-view-loan-details.service';
import { Observable } from 'rxjs';
//import { EmpViewLoanDetails } from '../../Model/emp-view-loan-details';
import { DataSource } from '@angular/cdk/collections';
import { UserLoanDetails } from '../../Model/user-loan-details';

@Component({
  selector: 'app-taken-view-by-emp',
  templateUrl: './taken-view-by-emp.component.html',
  styleUrls: ['./taken-view-by-emp.component.css']
})
export class TakenViewByEmpComponent implements OnInit {
userLoanDetails :UserLoanDetails[];
  displayedColumns: string[] = ['dateOfLoanObtained', 'amountOfLoanObtained', 'installmentDate', 'installmentAmount', 'redemptionDate'];

  dataSource = new MatTableDataSource<UserLoanDetails>();
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private empViewLoanDetailsService: EmpViewLoanDetailsService) { }

  ngOnInit() {
    this.dataSource = new MatTableDataSource<any>(this.userLoanDetails);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.empViewLoanDetailsService.getSpecifigEmp().subscribe(
      data => {
        this.dataSource.data = data;
      }
    );
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}
// export class UserLoanDetailsDataSource extends DataSource<any>{
//   constructor(private empViewLoanDetailsService: EmpViewLoanDetailsService){
//     super();
//   }
//   connect():Observable<UserLoanDetails[]>{
//     return this.empViewLoanDetailsService.getSpecifigEmp();
//   }
//   disconnect(){}
// }