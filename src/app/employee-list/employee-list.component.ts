import { Component } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrl: './employee-list.component.css'
})
export class EmployeeListComponent {

    employees!: Employee[];
    constructor(private employeeService: EmployeeService,
    private router: Router
    ){}
    ngOnInit(){

      this.getEmployee();
      
    }

    getEmployee(){
      return this.employeeService.getEmployeeList().subscribe(data =>{
        this.employees = data
      })
    }

    updateEmployee(id: number){
      return this.router.navigate(["update-employee", id])
    }

    deleteEmployee(id:number){
       this.employeeService.deleteEmployee(id).subscribe(data =>{
        console.log(data);
        this.getEmployee();
      })
    }
}
