import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OtherService {

  constructor() { }
  
  getOtherText() {
    return "Text From Other Service";
  }
}
