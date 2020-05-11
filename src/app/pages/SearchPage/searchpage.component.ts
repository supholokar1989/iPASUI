import { Component} from '@angular/core';


@Component({
  selector: 'app-user',
  templateUrl: './searchpage.component.html',
})
export class SearchPageComponent  {

  searchText: string;
  filters: Object;

  constructor() {}

}