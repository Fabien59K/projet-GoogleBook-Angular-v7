import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-my-collection',
  templateUrl: './my-collection.component.html',
  styleUrls: ['./my-collection.component.css']
})
export class MyCollectionComponent implements OnInit {
  listBooks
  constructor(private data:DataService) { }

  ngOnInit() {
    this.listBooks = this.data.getListBooksFromStorage();
    
  }

}
