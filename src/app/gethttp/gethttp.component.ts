import { Component, OnInit } from '@angular/core';
import { MyserviceService } from '../services/myservice.service';
import { Book } from '../core/model/book';
import { Observable } from 'rxjs';
import { HttpEventType, HttpErrorResponse } from '@angular/common/http';


@Component({
  selector: 'app-gethttp',
  templateUrl: './gethttp.component.html',
  styleUrls: ['./gethttp.component.css']
})
export class GethttpComponent implements OnInit {
  allBooks: Book[];
  allBooksAsync: Observable<Book[]>;
  filterBook: Book[];
  filterBookAsync: Observable<Book[]>;
  filterBook2: Book[];
  filterBookAsync2: Observable<Book[]>;

  filterBook3: any;
  filterBookAsync3: Observable<any>;

  constructor(private bookService: MyserviceService) { }

  ngOnInit() {
    this.getBooks();
    this.filterBooks("Angular 8", "Angular Book");

    // filterbook2
    this.filterBooks("Angular 8", "Angular Book");
    this.filterBooks2("PHP", "PHP Book");

    this.getFullResBooks();
    this.getBooksWithError();
  }

  // getbooks
  getBooks() {
    this.bookService.getAllBooks().subscribe(books => this.allBooks = books);
    this.allBooksAsync = this.bookService.getAllBooks();
  }

  // filter
  filterBooks(name: string, category: string) {
    this.bookService.filterBooks(name, category).subscribe(books => this.filterBook = books);
    this.filterBookAsync = this.bookService.filterBooks(name, category);
  }

  // filterBooks2
  filterBooks2(name: string, category: string) {
    this.bookService.filterBooks2(name, category).subscribe(books => this.filterBook2 = books);
    this.filterBookAsync2 = this.bookService.filterBooks2(name, category);
  }

  // filterbook3 for observe
  getFullResBooks() {
    this.bookService.getFullResponseBooks().subscribe(books => {
      //console.log(books.headers.get('Content-Type'));
      //Events 
      if (books.type == HttpEventType.Response) {
        console.log("Response Obtained");
        this.filterBook3 = books.body
        // debugger
      }

    });
    //  this.filterBookAsync3 = this.bookService.getFullResponseBooks();
  }

  // getBooksWithError()
  getBooksWithError() {
    this.bookService.getBookWithError().subscribe(res => {
      console.log(res);
    },
      // err=>{
      //   debugger;
      //   console.log(err);  
      // }

      (err: HttpErrorResponse) => {
        if (err.error instanceof Error) {
          // Client side error like network issue , rxjx issue ..etc
          // console.log("Client side error like network issue , rxjx issue ..etc");
          console.log("Error Message : " + err.error.message);
        } else {
          // backend response unsuccessfully response code like 400,404,500..etc
          //console.log("backend response unsuccessfully response code like 400,404,500..etc");
          console.log("Backend Response Status Code : " + err.status);
          console.log("Backend Response Status Text : " + err.statusText);
        }
      }
    );
  }


  // add book
  AddBook() {
    let newBook = { id: 107, name: 'Java', category: 'Java Book' };
    this.saveBook(newBook);
  }
  saveBook(Book: Book) {
    this.bookService.createBook(Book).subscribe(res => {
      // debugger;
      console.log("Record saved !!");
      console.log(res);
      this.getBooks();
    },
      err => {
        console.log(err);
      }
    );
  }

  // update book
  UpdateMyBook() {
    let updateBook = { id: 102, name: 'Native React js', category: 'Native React js Book' };
    this.UpdateBook(updateBook);
  }

  UpdateBook(book: Book) {
    this.bookService.UpdateBook(book).subscribe(res => {
      // debugger;
      console.log("Record updated !!");
      console.log(res);
      this.getBooks();
    },
      (err: HttpErrorResponse) => {
        if (err.error instanceof Error) {
          // Client side error like network issue , rxjx issue ..etc
          // alert("Client side error like network issue , rxjx issue ..etc");
          alert("Error Message : " + err.error.message);
        } else {
          // backend response unsuccessfully response code like 400,404,500..etc
          //alert("backend response unsuccessfully response code like 400,404,500..etc");
          alert("Backend Response Status Code : " + err.status);
          alert("Backend Response Status Text : " + err.statusText);
        }
      }
    );
  }

  // delete book
  DeleteBook() {
    this.bookService.deleteBook(104).subscribe(res => {
      alert("Record deleted !!");
      this.getBooks();
    });
  }

}
