import { Component, OnInit } from '@angular/core';

interface keypair {
  key: number;
  value: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  title: string = "Typescript";
  age: Number = 20;
  isshown: boolean = false;
  num: number = 100;
  list: number[] = [10, 30, 50, 80];
  list1: Array<number> = [20, 40, 70, 90];
  arraystring: Array<string> = ["red", "blue"];
  array: Array<any> = ["red", "blue", 20, 30];
  object: object = { name: "Reddy", age: 28 };

  // tupple
  // employee: [number, string, number, boolean] = [10, "Reddy", 10, true];
  employee: [number, string][];


  constructor() {
    // array
    console.log(typeof (this.list));
    console.log(typeof (this.list1));
    console.log(typeof (this.arraystring));
    console.log(typeof (this.array));
    console.log(typeof (this.employee));
    // object
    console.log(typeof (this.object));
    // tupple
    this.employee = [[10, "Reddy"], [18, "Aruna"], [20, "Mohan"]];
    console.log(this.employee);
    // interface
    let varkay: keypair = { key: 1, value: "Reddy" };
    let varkay1: keypair = { key: 2, value: "Aruna" };
    console.log(varkay);
    console.log(varkay1);
  }

  ngOnInit() {
    this.add(20, 10);
    //  this.add('abc',10);
    // this.letDeclaration();
    // this.varDeclaration();
  }

  add(firstNo: number, secno: number) {
    console.log(firstNo + secno);
  }

  letDeclaration() {
    let num1: number = 101;
    if (num1 > this.num) {
      let num2: number = 102;
      console.log(num2);
    }
    // while (this.num < num1) {
    //   let num3: number = 104;
    //   console.log(num3);
    // }
    console.log(this.num);
    console.log(num1);
    // console.log(num2);
    // console.log(num3);
  }

  varDeclaration() {
    var num1: number = 101;
    if (num1 > this.num) {
      var num2: number = 102;
      console.log(num2);
    }
    // while (this.num < num1) {
    //   var num3: number = 104;
    //   console.log(num3);
    // }
    console.log(this.num);
    console.log(num1);
    console.log(num2);
    // console.log(num3);
  }

}
