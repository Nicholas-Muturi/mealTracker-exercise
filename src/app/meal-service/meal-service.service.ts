import { Injectable } from '@angular/core';
import { Meal } from '../meal';

@Injectable({
  providedIn: 'root'
})

export class MealServiceService {
  meals: Meal[];
  
  getMeal(){
    return this.meals;
  }

  constructor() { 
    this.meals=[
      new Meal(0,"Chips w/ Chicken",800,"No additonal details"),
      new Meal(1,"Large Pizza",1200,"No additonal details")
    ];
  }
}
