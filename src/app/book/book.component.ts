import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  @Input() book;
  constructor(private router: Router) { }

  ngOnInit() {
  }

  goToDetail = () => {
    this.router.navigate(['/detail',this.book.id])
  }

}
