import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearchComponent } from '../SearchPage/Search/search.component';
import { UserListComponent } from '../SearchPage/user-lists/user-list.component';
import { FilterPipe } from '../SearchPage/Pipe/filter.pipe';
import {SearchPageComponent} from '../SearchPage/searchpage.component';


@NgModule({
  imports:      [ CommonModule, FormsModule, ReactiveFormsModule ],
  declarations: [ SearchPageComponent, SearchComponent, UserListComponent,SearchPageComponent, FilterPipe ]
})
export class SearchPageModule { }
