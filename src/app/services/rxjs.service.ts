import { Injectable } from '@angular/core';
import { Observable, interval, of, Subject, BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RxjsService {

  userName = new Subject();
//  userName = new BehaviorSubject('Reddamma');

  constructor(private http: HttpClient) { }

  listenRadio(): Observable<any> {
    return interval(1000);
  }

  concat(){
    of(1, 2, 3),
  // subscribed after first completes
  of(4, 5, 6),
  // subscribed after second completes
  of(7, 8, 9)
  }

  fetch(){
    return this.http.get("https://jsonplaceholder.typicode.com/todos/1")
  }
}
