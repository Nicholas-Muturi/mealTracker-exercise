import { Component, OnInit } from '@angular/core';
import { Meal } from '../meal';
import { MealServiceService } from '../meal-service/meal-service.service';

@Component({
  selector: 'app-meal',
  templateUrl: './meal.component.html',
  styleUrls: ['./meal.component.css']
})
export class MealComponent implements OnInit {

  meals: Meal[];
  mealService: MealServiceService;

  /************************ START FUNCTIONS ************************/

  toggleDetails(index: number){
    this.meals[index].showDetails = true;
    this.meals[index].showDetailsBtn = false;
  }

  hideDetails(index: number){
    this.meals[index].showDetails = false;
    this.meals[index].showDetailsBtn = true;
  }

  mealDelete(index: number){
    this.meals.splice(index, 1);
  }

  addMeal(addedMeal){
    let arrayLength: number = this.meals.length;
    addedMeal.id = arrayLength + 1;
    this.meals.push(addedMeal);
  }

  changeListOutput(filterValue: number){
    console.log(filterValue);
    if(filterValue == 0){
      this.mealService.showAll();
    }
    else if (filterValue == 1) {
      this.mealService.moreThan500();
    }
    else if (filterValue == 2) {
      this.mealService.lessThan500();
    }

  }


  /************************ END FUNCTIONS ************************/

  constructor(mealService: MealServiceService) {
    this.meals = mealService.getMeal();
    this.mealService = mealService;
  }

  ngOnInit() {
  }

}
