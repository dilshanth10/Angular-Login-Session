import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';

@Component({
  selector: 'app-emp-view',
  templateUrl: './emp-view.component.html',
  styleUrls: ['./emp-view.component.css']
})
export class EmpViewComponent implements OnInit {

  displayedColumns: string[] = ['employeeId', 'employeename','dateofappoinment','basicsalary','increment','deductions','allowances','statutorypayment','netsalary'];

  empview = [
    { 'employeeId':'1', 'employeename':'EmpLoan', 'dateofappoinment':'12.12.2018', 'basicsalary' :'50000', 'increment':'15000',"deductions":"2000","allowances":"20000","statutorypayment":"1000","netsalary":"2500000"},
    { 'employeeId':'2', 'employeename':'EmpLoan', 'dateofappoinment':'12.12.2018', 'basicsalary' :'50000', 'increment':'15000',"deductions":"5006","allowances":"15000","statutorypayment":"1000","netsalary":"1500000"},
    { 'employeeId':'3', 'employeename':'EmpLoan', 'dateofappoinment':'12.12.2018', 'basicsalary' :'50000', 'increment':'15000',"deductions":"5660","allowances":"20000","statutorypayment":"1000","netsalary":"2500000"},
    { 'employeeId':'4', 'employeename':'EmpLoan', 'dateofappoinment':'12.12.2018', 'basicsalary' :'50000', 'increment':'15000',"deductions":"5661","allowances":"40000","statutorypayment":"1000","netsalary":"4500000"},
    { 'employeeId':'5', 'employeename':'EmpLoan', 'dateofappoinment':'12.12.2018', 'basicsalary' :'50000', 'increment':'15000',"deductions":"5655","allowances":"66500","statutorypayment":"1000","netsalary":"6500000"},
    { 'employeeId':'6', 'employeename':'EmpLoan', 'dateofappoinment':'12.12.2018', 'basicsalary' :'50000', 'increment':'15000',"deductions":"5998","allowances":"65665","statutorypayment":"1000","netsalary":"3500000"},
    { 'employeeId':'7', 'employeename':'EmpLoan', 'dateofappoinment':'12.12.2018', 'basicsalary' :'50000', 'increment':'15000',"deductions":"5139","allowances":"98456","statutorypayment":"1000","netsalary":"2500000"},
    { 'employeeId':'8', 'employeename':'EmpLoan', 'dateofappoinment':'12.12.2018', 'basicsalary' :'50000', 'increment':'15000',"deductions":"5985","allowances":"65682","statutorypayment":"1000","netsalary":"2500000"},
    { 'employeeId':'9', 'employeename':'EmpLoan', 'dateofappoinment':'12.12.2018', 'basicsalary' :'50000', 'increment':'15000',"deductions":"2698","allowances":"58589","statutorypayment":"1000","netsalary":"2500000"}
  ]
  dataSource = new MatTableDataSource<any>(this.empview);
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor() { }

  ngOnInit() {
    this.dataSource = new MatTableDataSource<any>(this.empview);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
