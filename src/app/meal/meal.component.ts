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



  /************************ END FUNCTIONS ************************/

  constructor(mealService: MealServiceService) {
    this.meals = mealService.getMeal();
  }

  ngOnInit() {
  }

}
