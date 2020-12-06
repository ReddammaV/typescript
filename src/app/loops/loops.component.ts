import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loops',
  templateUrl: './loops.component.html',
  styleUrls: ['./loops.component.css']
})
export class LoopsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    // for loop
    for (let i = 0; i < 5; i++) {
      console.log(i);
    }

    let array = [10, 20, 30, 40, 50];
    for (let index = 0; index < array.length; index++) {
      console.log(array[index]);
    }

    // for of
    let array2 = [25, 85, 36, 78, 41];
    for (let item of array2) {
      console.log(item);
    }

    // for in
    let array3 = ['Reddy', 'Mohan', "Aruna"];
    for (let item in array3) {
      console.log(array3[item]);
    }

    // while
    this.whileLoop();

    // dowhile
    this.DoWhileExample();
  }

  // while function
  whileLoop() {
    let i: number = 0;
    let arr = [10, 20, 30]
    // while(i<4){
    //   console.log("Value is: " + i);
    //   i++;
    // }

    while (i < arr.length) {
      console.log('value is: ' + i);
      i++;
    }
  }

  // dowhile
  DoWhileExample() {
    let i: number = 0;

    do {
      console.log("value is" + i);
      i++;
    } while (i < 4)
  }

}
