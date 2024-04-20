import { Component } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { ActivatedRoute, Router } from '@angular/router';
import { error } from 'console';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrl: './update-employee.component.css'
})
export class UpdateEmployeeComponent {

  id!: number;
  employee: Employee = new Employee();
  constructor(private employeService: EmployeeService,
   private router: ActivatedRoute,
   private router1: Router
  ){}
  ngOnInit():void{
    
    this.id = this.router.snapshot.params["id"];

    this.employeService.getEmployeeById(this.id).subscribe(data =>{
      this.employee = data;
    }, error => console.log(error));
  }

  updateEmployee(){
    this.employeService.updateEmployee(this.id, this.employee)
    .subscribe(data =>{
      console.log(data)
      this.employee = new Employee();
      this.gotoList();
    }, error => console.log(error));
  }

  onSubmit(){
    this.updateEmployee();
  }

  gotoList(){
    this.router1.navigate(["/employees"]);
  }

}
