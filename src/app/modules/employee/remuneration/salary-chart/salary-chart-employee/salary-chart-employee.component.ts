import { Component, OnInit, ViewChild } from '@angular/core';
import { ViewEmpSalaryChart } from '../../Model/view-emp-salary-chart';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { ViewEmpSalaryChartService } from '../../Service/view-emp-salary-chart.service';

@Component({
  selector: 'app-salary-chart-employee',
  templateUrl: './salary-chart-employee.component.html',
  styleUrls: ['./salary-chart-employee.component.css']
})
export class SalaryChartEmployeeComponent implements OnInit {
  viewEmpSalaryChart: ViewEmpSalaryChart;
  dataSource = new MatTableDataSource<ViewEmpSalaryChart>();
  displayedColumns: string[] = ['id', 'empName', 'basicSalary', 'loan', 'netSalary', 'payee', 'stampDuty', 'statutoryPayment','netSalary','epf12','etf3', 'epf8'];
  displayedColumnsForEmployee: string[] = ['id', 'basicSalary',  'loan', 'netSalary', 'payee', 'stampDuty', 'statutoryPayment','netSalary','epf12','etf3','epf8'];
  _postsArray: ViewEmpSalaryChart[];
  constructor(private viewEmpSalaryChartService: ViewEmpSalaryChartService) { }

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  name: String;
  id:number;
  role="employee";

  ngOnInit():void {
  //  this.getSalaryChartEmployeeById(1);
  
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }


  // getSalaryChartEmployeeById(id) {
  //   this.viewEmpSalaryChartService.getSalaryChartEmployeeById(id).subscribe(data => {
  //     this.dataSource.data = data;
  //   });
  //   this.dataSource = new MatTableDataSource<any>(this.viewEmpSalaryChart);
  //   this.dataSource.paginator = this.paginator;
  //   this.dataSource.sort = this.sort;
  // }
  // getSalaryChartEmployeeById(id): void {
  //   this.viewEmpSalaryChartService.getSalaryChartEmployeeById(id).subscribe(
  //      resultArray => this._postsArray = resultArray,
  //      error => console.log("Error :: " + error ))
  
}
