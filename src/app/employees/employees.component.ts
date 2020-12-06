import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {
  employees:any;

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.getEmployees();
  }

  getEmployees(){
   this.apiService.getJSON().subscribe(data => {
      this.employees = data.data;
      // console.log(this.employees);
      // console.log(this.employees.data, 'fsdf');
    });
  }

}
