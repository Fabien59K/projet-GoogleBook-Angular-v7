import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { NgxSpinnerService } from 'ngx-spinner';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private data:DataService, private spinner: NgxSpinnerService) { 

  }

  ngOnInit() {
  }

  change = (event) => {
    
    //this.data.updateSearchValue(event.target.value)
    if(event.target.value.length > 2) {
      this.spinner.show()
      this.data.getListBooks(event.target.value).subscribe((result:any)=> {
        this.data.updatelistBooks(result.items);
        this.spinner.hide()
      })
    } 
    
  }

}
