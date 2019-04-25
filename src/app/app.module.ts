import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { BrowseBookComponent } from './browse-book/browse-book.component';
import { MyCollectionComponent } from './my-collection/my-collection.component';
import { SearchComponent } from './search/search.component';
import { ListBooksComponent } from './list-books/list-books.component';
import { BookComponent } from './book/book.component';
import { DetailBookComponent } from './detail-book/detail-book.component';
import {Routes, RouterModule} from "@angular/router";
import {FormsModule, ReactiveFormsModule} from "@angular/forms"
import { DataService } from './data.service';
import { HttpClientModule } from '@angular/common/http';
import { ButtonBookComponent } from './button-book/button-book.component';
import { NgxSpinnerModule } from 'ngx-spinner';
import { AddBookComponent } from './add-book/add-book.component';

const routes: Routes = [
  {path:'', component:MyCollectionComponent},
  {path:'search', component:BrowseBookComponent},
  {path:'detail/:id', component:DetailBookComponent},
]



@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    BrowseBookComponent,
    MyCollectionComponent,
    SearchComponent,
    ListBooksComponent,
    BookComponent,
    DetailBookComponent,
    ButtonBookComponent,
    AddBookComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule, ReactiveFormsModule,
    HttpClientModule,NgxSpinnerModule
    
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
