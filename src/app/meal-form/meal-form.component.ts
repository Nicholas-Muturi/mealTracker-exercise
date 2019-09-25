import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Meal } from '../meal';
import { ListFilters } from '../list-filters';
import { FilterService } from '../filter-service/filter.service';

@Component({
  selector: 'app-meal-form',
  templateUrl: './meal-form.component.html',
  styleUrls: ['./meal-form.component.css']
})
export class MealFormComponent implements OnInit {
  filters: ListFilters[];
  filterSelected: number;

  newMeal = new Meal(0,"",0,"");
  @Output() mealAdd = new EventEmitter<Meal>();
  @Output() filterEmitter = new EventEmitter<number>();

  submitForm(){
    this.mealAdd.emit(this.newMeal);
  }

  filterChange(value: number){
    this.filterEmitter.emit(value);
  }

  constructor(allFilters: FilterService) {
    this.filters = allFilters.getFilters();
  }

  ngOnInit() {

  }

}
