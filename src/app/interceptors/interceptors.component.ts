import { Component, OnInit } from '@angular/core';
import { RxjsService } from '../services/rxjs.service';

@Component({
  selector: 'app-interceptors',
  templateUrl: './interceptors.component.html',
  styleUrls: ['./interceptors.component.css']
})
export class InterceptorsComponent implements OnInit {

  constructor(private rxjsService: RxjsService) { }

  ngOnInit() {
  }

  fetch(){
    this.rxjsService.fetch().subscribe(data => console.log(data))
  }

}
