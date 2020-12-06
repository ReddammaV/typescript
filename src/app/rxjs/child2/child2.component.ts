import { Component, OnInit } from '@angular/core';
import { RxjsService } from 'src/app/services/rxjs.service';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css']
})
export class Child2Component implements OnInit {

  empName: any;
  constructor(private myService: RxjsService) {
    this.myService.userName.subscribe(name => {
      this.empName = name
    });
  }

  updateEmployeeName(name: any) {
    this.myService.userName.next(name);
  }

  ngOnInit() {
  }

}
