import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import {HttpClient} from "@angular/common/http"

@Injectable()
export class DataService {
  // searchValue;
  // searchSubjectValue = new Subject<any>();
  listBooks = [];
  listBooksSubject = new Subject<any>();
  constructor(private http:HttpClient) { }

  // updateSearchValue = (value) => {
  //   this.searchValue = value;
  //   this.searchSubjectValue.next(this.searchValue)
  // }

  updatelistBooks =(books)=> {
    this.listBooks = books;
    this.listBooksSubject.next(books);
  }

  getListBooks = (value) => {
    return this.http.get('https://www.googleapis.com/books/v1/volumes/?q='+value)
  }

  getListBooksFromStorage = () => {
    
    return ((JSON.parse(localStorage.getItem('books')) != undefined) ? (JSON.parse(localStorage.getItem('books'))) : [])
  }

  removeFromLocalStorage = (book) => {
    let liste = this.getListBooksFromStorage();
    liste.splice(liste.findIndex(b=>b.id == book.id),1);
    localStorage.setItem('books',JSON.stringify(liste));
  }
  addToLocalStorage = (book) => {
    let liste = this.getListBooksFromStorage();
    liste.push(book);
    localStorage.setItem('books',JSON.stringify(liste));
  }
}
