import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-button-book',
  templateUrl: './button-book.component.html',
  styleUrls: ['./button-book.component.css']
})
export class ButtonBookComponent implements OnInit {

  @Input() exists = false;
  classCss;
  contenu
  @Output() bookClick = new EventEmitter<any>()
  constructor() { }

  ngOnInit() {
    this.update();
  }

  update = () => {
    if(!this.exists){
      this.classCss = "btn btn-raised btn-primary";
      this.contenu ="Add To Collection";
    }
    else {
      this.classCss = "btn btn-raised btn-danger";
      this.contenu= "Remove from collection"
    }
  }

  click =(event) => {
    this.exists = !this.exists;
    this.update()
    this.bookClick.emit(this.exists);
  }

}
