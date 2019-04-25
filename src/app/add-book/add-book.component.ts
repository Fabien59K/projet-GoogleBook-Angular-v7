import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {
  formAdd;
  constructor(private fb:FormBuilder, private data:DataService, private router:Router) { }

  ngOnInit() {
    this.formAdd = this.fb.group({
      id : [''],
      title : [''],
      subTitle : [''],
      urlImage : [''],
      description : [''],
      author : [''],
    })
  }

  uniquId =  () => {
    
    return '_' + Math.random().toString(36).substr(2, 9);
  };

  AddBook = ()=> {
    let book = {
      id : this.uniquId(),
      volumeInfo : {
        title : this.formAdd.value.title,
        subtitle : this.formAdd.value.subtitle,
        description : this.formAdd.value.description,
        imageLinks :{
          smallThumbnail : this.formAdd.value.urlImage
        },
        authors : [
          this.formAdd.value.author
        ]
      }
    }
    this.data.addToLocalStorage(book);
    this.router.navigate(['/'])
  }

}
