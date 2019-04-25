import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail-book',
  templateUrl: './detail-book.component.html',
  styleUrls: ['./detail-book.component.css']
})
export class DetailBookComponent implements OnInit {
  book;
  exist ;
  constructor(private data:DataService, private maRoute : ActivatedRoute) { }

  ngOnInit() {
    let id = this.maRoute.snapshot.params.id;
    let index = this.data.getListBooksFromStorage().findIndex(b=> b.id == id);
    if( index >= 0) {
      
      this.exist = true
      this.book = this.data.getListBooksFromStorage()[index]
    }
    else {
      this.data.getListBooks(id).subscribe((result:any)=> {
        this.book = result.items[0];
        this.exist = false
      })
     
    }
    
  }

  bookCliked = (event) => {
    if(event == false) {
      this.data.removeFromLocalStorage(this.book);
    }
    else if(event == true) {
      this.data.addToLocalStorage(this.book);
    }
  }

}
