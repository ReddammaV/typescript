import { Component, OnInit } from '@angular/core';
import { MyserviceService } from '../services/myservice.service';

@Component({
  selector: 'app-httpservice',
  templateUrl: './httpservice.component.html',
  styleUrls: ['./httpservice.component.css']
})
export class HttpserviceComponent implements OnInit {

  msg: string = "";
  allNum: number[] = [];
  constructor(private myService: MyserviceService) { }

  ngOnInit() {
    this.msg = this.myService.getText();
    this.getData();
  }

  callService()
  {
    this.msg= this.myService.getText2();
  }
  callOtherService()
  {
    this.msg= this.myService.getOtherText();
  }

  // list
  addNumber(data: number) {
    this.myService.addNum(data);
    this.getData();
  }

  getData() {
    this.allNum = this.myService.getList();
  }

}
