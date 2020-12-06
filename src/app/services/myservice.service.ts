import { Injectable } from '@angular/core';
import { OtherService } from './other.service';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

import { Book } from '../core/model/book';

@Injectable({
  providedIn: 'root'
})
export class MyserviceService {
  list: number[] = [100];
  bookUrl: string = 'http://localhost:3000/Book';
  invalidurl = "http://localhost:3000/invalid";



  constructor(private otherService: OtherService, private http: HttpClient) { }

  getText() {
    return "Text From Service";
  }

  getText2() {
    return "Text From Service 2";
  }

  getOtherText() {
    return this.otherService.getOtherText();
  }

  addNum(val: number) {
    this.list.push(val);
  }

  getList() {
    return this.list;
  }

  // getbooks
  getAllBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(this.bookUrl, { responseType: 'json' });
  }
  // // filter 
  // filterBooks(name: string, category: string): Observable<Book[]> {
  //   return this.http.get<Book[]>(this.bookUrl + '?name=' + name + '&category=' + category);
  // }

  //filter - httpHeaders 
  filterBooks(name: string, category: string): Observable<Book[]> {
    let httpHeaders = new HttpHeaders()
      .set("Accept", "application/json")

    return this.http.get<Book[]>(this.bookUrl + '?name=' + name + '&category=' + category, {
      headers: httpHeaders,
      responseType: 'json'
    });
  }

  //HttpHeaders and HttpParams
  filterBooks2(name: string, category: string): Observable<Book[]> {
    //return this.http.get<Book[]>(this.bookUrl + '?name=' + name + '&category=' + category);

    let httpHeaders = new HttpHeaders()
      .set("Accept", "application/json")

    let httpParams = new HttpParams()
      .set('name', name)
      .set('category', category)

    return this.http.get<Book[]>(this.bookUrl, {
      headers: httpHeaders,
      params: httpParams,
      responseType: 'json'
    });
  }

  //HttpClient.get with observe Property
  getFullResponseBooks(): Observable<any> {
    let httpHeaders = new HttpHeaders()
      .set("Accept", "application/json")

    return this.http.get(this.bookUrl, {
      // observe:"body"
      // observe: "response",
      observe: "events",
      headers: httpHeaders
    })
  }

   //Error Handling
   getBookWithError(): Observable<any> {
    return this.http.get(this.invalidurl);
  }

  // create
  createBook(book: Book): Observable<any> {
    let httpHeaders = new HttpHeaders()
      .set("Content-Type", "application/json")

    // let options = {
    //   headers: httpHeaders,
    // }
    // return this.http.post(this.bookUrl, book, {
    //   headers: httpHeaders
    // });

    return this.http.post(this.bookUrl, book, {
      headers: httpHeaders,
      //observe:'body'
      observe: 'response'
    });
  }


  // update
  UpdateBook(book: Book): Observable<any> {

    let httpHeaders = new HttpHeaders()
      .set("Content-Type", "application/json")

    return this.http.put(this.bookUrl + "/" + book.id, book, {
      headers: httpHeaders
    });
  }

  // delete
  deleteBook(bookId: number): Observable<any> {
    let httpHeaders = new HttpHeaders()
      .set("Content-Type", "application/json")

    return this.http.delete(this.bookUrl + "/" + bookId, {
      headers: httpHeaders
    });
  }
}
