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


  showAll(){
    for(var i = 0; i<this.meals.length;i++){
      this.meals[i].showMeal = true;
    }
  }

  lessThan500(){
    //reset previously modified values
    this.showAll();
    for(var i = 0; i<this.meals.length;i++){
      if(this.meals[i].calories >= 500){
        this.meals[i].showMeal = false;
      }
    }
  }

  moreThan500(){
    //reset previously modified values
    this.showAll();
    for(var i = 0; i<this.meals.length;i++){
      if(this.meals[i].calories < 500){
        this.meals[i].showMeal = false;
      }
    }
  }

  constructor() { 
    this.meals=[
      new Meal(0,"Chips Lite",450,"No additonal details"),
      new Meal(1,"Large Pizza",1200,"No additonal details")
    ];
  }
}
