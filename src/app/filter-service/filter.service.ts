import { Injectable } from '@angular/core';
import { ListFilters } from '../list-filters';

@Injectable({
  providedIn: 'root'
})

export class FilterService {
  filters: ListFilters[];

  getFilters(){
    return this.filters;
  }

  constructor() {
    this.filters = [
      new ListFilters(0,"All Meals"),
      new ListFilters(1,"Meals over 500 calories"),
      new ListFilters(2,"Meals under 500 calories")
    ];
  }
}
