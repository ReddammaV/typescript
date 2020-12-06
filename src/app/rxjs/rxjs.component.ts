import { Component, OnInit } from '@angular/core';
import { interval, Observable, of, from, pipe, concat } from 'rxjs';
import { RxjsService } from '../services/rxjs.service';
import { map, filter } from 'rxjs/operators';


@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.css']
})
export class RxjsComponent implements OnInit {
  person: any = {
    name: 'Reddy'
  }

  empName: any;

  constructor(private rxjsService: RxjsService) { 
    this.rxjsService.userName.subscribe(name => {
      this.empName = name;
      console.log(this.empName);
    });
  }

  ngOnInit() {
    // observable
    // this.listenRadio();

    // of operator
    this.of();

    // from operator
    this.from();

    //  map
    this.map();

    // filter
    this.filter();
    // concat
    this.concat();
  }



  // observable
  listenRadio() {
    this.rxjsService.listenRadio().subscribe(data => {
      console.log(data);
    })
  }

  // of 
  of() {
    const personObs: Observable<any> = of(this.person);
    // const personObs: Observable<any> = of('Red');
    personObs.subscribe(data => console.log(data));
  }

  // from 
  from() {

    //emit array as a sequence of values
    const arraySource = from([1, 2, 3, 4, 5]);
    //output: 1,2,3,4,5
    arraySource.subscribe(val => console.log(val));

    const personPromise: Promise<any> = Promise.resolve(this.person);
    // const personFrom: Observable<any> = of(personPromise);
    const personFrom: Observable<any> = from(personPromise);
    personFrom.subscribe(data => console.log(data));
  }

  // map operator
  map() {
    let allnumbers = from([1, 2, 3, 4, 5]);

    allnumbers
      .pipe(map(val => val + 10))
      .subscribe(data => console.log(data))

    // exmple 2
    const source = from([
      { name: 'Joe', age: 30 },
      { name: 'Frank', age: 20 },
      { name: 'Ryan', age: 50 }
    ]);
    //grab each persons name, could also use pluck for this scenario
    source
      .pipe(map(({ name }) => 'Hi' + ' ' + name))
      .subscribe(data => console.log(data));
  }

  // filter
  filter() {
    const source = from([1, 2, 3, 4, 5]);
    //filter out non-even numbers
    source.pipe(filter(num => num % 2 === 0))
      .subscribe(data => console.log("Filter " + data));

    // ex 2
    //emit ({name: 'Joe', age: 31}, {name: 'Bob', age:25})
    const employees = from([
      { name: 'Joe', age: 31 },
      { name: 'Bob', age: 25 }
    ]);
    //filter out people with age under 30
    employees.pipe(filter(person => person.age >= 30))
      .subscribe(data => console.log(data.name));
  }

  // concat
  concat() {
    concat(
      of(1, 2, 3),
      // subscribed after first completes
      of(4, 5, 6),
      // subscribed after second completes
      of(7, 8, 9)
    )
      .subscribe(data => console.log("concat " + data))
  }







}
