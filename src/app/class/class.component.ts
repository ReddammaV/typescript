import { Component, OnInit } from '@angular/core';

// class
class abc {
  showDetails(rollno: number, name: string) {
    console.log(rollno + ":" + name);
  }
}

// enum
enum color {
  red, blue, green, violet
}

@Component({
  selector: 'app-class',
  templateUrl: './class.component.html',
  styleUrls: ['./class.component.css'],
  viewProviders: [abc]
})
export class ClassComponent implements OnInit {

  constructor(private obj: abc) {
    // class
    obj.showDetails(10, 'Reddy');
    // enum
    let mycolor: color;
    mycolor = color.green;
    console.log(mycolor);

    // null
    var a = null;
    console.log(a);
    console.log(typeof(a));

    // undefined
    var b = undefined;
    console.log(b);
    console.log(typeof(b));
  }

  ngOnInit() {
    this.add(10, 20);
    let output1 = this.show<number>(100);
    console.log(output1);
    let output2 = this.show<string>('Reddy');
    console.log(output2);
    let output3 = this.show<boolean>(true);
    console.log(output3);
  }

  // function
  add(a: number, b: number) {
    console.log(a + b);
  }

  // Generics
  show<T>(arg: T): T {
    return arg;
  }

}
