import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-list-books',
  templateUrl: './list-books.component.html',
  styleUrls: ['./list-books.component.css']
})
export class ListBooksComponent implements OnInit {
  @Input() listBooks;
  constructor(private data:DataService) { }

  ngOnInit() {
    console.dir(this.listBooks)
    this.data.listBooksSubject.subscribe((newBooks)=> {
      this.listBooks = []
      console.log(newBooks)
      this.listBooks = newBooks;
    })
  }

}
