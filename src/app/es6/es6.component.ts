import { Component, OnInit } from '@angular/core';




@Component({
  selector: 'app-es6',
  templateUrl: './es6.component.html',
  styleUrls: ['./es6.component.css']
})
export class Es6Component implements OnInit {
  msg = "List of colors";


  constructor() { }

  ngOnInit() {
    // // arrow functions
    // this.show();
    // this.hello();
    // // template literals
    // this.template();
    // // hoisting
    // this.hoisting();

    // default parameters
    this.dp();
    this.dp(20);
    this.dp(20,30);
    this.dp(undefined,30);

    // rest parameter
    this.rp(10,20,30);

    // spread operator
    this.sp();

    // destructuring
    this.arrayds();
    this.objectds();

    // set
    this.set();
    // map
    this.map();

    // callback
    // this.myfunc(this.callshow());
    this.myfunc(this.callshow);


  }

  // arrow function
  show(){

    setTimeout( function(){
      console.log("Hello Function");
    }, 2000)

    setTimeout(() => {
      console.log("Hello Arrow Function");
    }, 3000);
  }

  // arow function
  hello = (() => console.log("Hi"));

  // template literals
  template(){
    let name = "Reddy";
    console.log('Welcome ' + name + ' have a nice day!');
    console.log(`Welcome ${name} have a nice day!`);

    let a=10, b=20;
    console.log(`Add ${a+b}`);
  }

  // hoisting
  hoisting(){
    console.log(hoist);

    var a = "Variables and function declarations";
    console.log(`What is hoisted? ${name}`);

    var hoist = "to lift or raise up";
    console.log(`Hoist Means ${hoist}`);
  }

  // default parameters
  dp(value=5, bonus=2){
    console.log(value);
    // console.log(value+bonus);
  }

  // rest parameter
  rp(a,...args){
    console.log(a);
    console.log(args);
  }

  // spread operator
  sp(){
    let a= [10,20,30];
    let b = [...a,40,50,60];
    let c = [5,...a,...b,70,80]
    console.log(a);
    console.log(b);
    console.log(c);
  }

  // array destructuring
  arrayds(){
    // normal destructuring
    let myproglanguages = ['js','php','HTML','CSS','Angular'];
    let top1 = myproglanguages[0];
    let top2 = myproglanguages[1];
    let top3 = myproglanguages[2];
    console.log('My Fav Programming lang is '+top1);

    // es6 destructuring
    let mylang =  ['js','php','HTML','CSS','Angular'];
    let [t1,t2,t3,t4,t5] = mylang;
    console.log('My Fav Programming lang is '+t5);
  }

  // object destructuring
  objectds(){
    let biodata = {
      name: "Reddy",
      age: 27,
      deg: "B.Tech",
      hobb: {
        first: "Listning Music",
        second: "Watching Youtube"
      }
    }
    console.log(`My Name is ${biodata.name}`);
    // object destructuring
    let {name,age,deg,hobb} = biodata;
    console.log(`My Name is ${name} age is ${age} and my hobbies are ${hobb.first}, ${hobb.second}`);
  }

  // set
  set(){
    let myarray = [10,20,30,"Reddy"];
    let myset = new Set(myarray);

    console.log(myarray);
    console.log(myset);

    myset.add(40);
    myset.add(50);
    myset.add("Reddy");
    console.log(myset);

    // check for the value
    console.log(myset.has("Red"));

    // Delete the value
    console.log(myset.delete(50));
    console.log(myset); 
  }

  // map
  map(){
    let zoo = new Map();
    zoo.set("Zebra",5);
    zoo.set("Lions",8);
    zoo.set("Tigers",10);
    console.log(zoo);

    let tigercount = zoo.get('Tigers');
    console.log(tigercount);

    for (let [key, value] of zoo) {
      console.log(key + ' : ' + value);
    }
  }

  // callback
  callshow(){
    console.log("This is a function");
  }

  myfunc(callback){
    callback();
  }

  
  


}

