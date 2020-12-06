import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-conditions',
  templateUrl: './conditions.component.html',
  styleUrls: ['./conditions.component.css']
})
export class ConditionsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    // if example
    if (true) { console.log('This will always executed.'); }
    if (false) { console.log('This will never executed.'); }

    // if else
    var x = 10, y = 20;
    if (x > y) {
      console.log('X is Greater than Y');
    } else {
      console.log('X is Less than Y');
    }
    // terinary 
    x > y ? console.log('X is Greater than Y') : console.log('X is Less than Y');

    // if and else if
    var num: number = 2;
    if (num > 0) {
      console.log(num + " is positive")
    } else if (num < 0) {
      console.log(num + " is negative")
    } else {
      console.log(num + " is neither positive nor negative")
    }

    // switch
    let Day = 4;
    switch (Day) {
      case 0:
        console.log("It is Sunday");
        break;
      case 1:
        console.log("It is Monday");
        break;
      case 2:
        console.log("It is Tuesday");
        break;
      case 3:
        console.log("It is Wednessday");
        break;
      case 4:
        console.log("It is Thursday");
        break;
      case 5:
        console.log("It is Friday");
        break;
      case 6:
        console.log("It is Saturday");
        break;

      default:
        console.log("No Data Found");
        break;
    }

    // switch example
    let a = 10, b = 5;
    switch (a - b) {
      case 0:
        console.log("Result is: 0");
        break;
      case 5:
        console.log("Result is: 5");
        break;

      default:
        console.log("No Data Matches");
        break;
    }
  }



}
