import { Component, OnInit } from '@angular/core';
import { RxjsService } from '../../../app/services/rxjs.service';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})
export class Child1Component implements OnInit {

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
