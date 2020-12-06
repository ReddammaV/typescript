import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Dining } from '../core/model/dining';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  url: string = 'http://localhost:3000/restaurent';
  private headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private http: HttpClient) {

  }

  public getJSON(): Observable<any> {
    return this.http.get("./assets/data/data.json");
  }

  // getAllRestaurant
  getAllRestaurant(): Observable<Dining[]> {
    return this.http.get<Dining[]>(this.url);
  }

  // create post
  createRestaurant(restaurant: Dining): Observable<Dining> {
    return this.http.post<Dining>(this.url + '/register', restaurant, { headers: this.headers });
  }

  // UpdateRestaurant(restaurant: Dining): Observable<Dining>{
  //   return this.http.put<Dining>(this.url + '/', restaurant.id,{headers:this.headers});
  // }

  UpdateRestaurant(data) {
    console.log(data.id._id, 'dfghjtyret')
    return this.http.put(this.url + '/' + data.id._id, data);
  }


  deleteRestaurant(id: number): Observable<Dining> {
    return this.http.delete<Dining>(this.url + '/' + id, { headers: this.headers });
  }


  // getEmployeeById
  getEmployeeById(employeeId: string): Observable<Dining> {
    return this.http.get<Dining>(this.url + '/' + employeeId);
  }

}
