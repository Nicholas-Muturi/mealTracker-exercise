import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Meal } from '../meal';

@Component({
  selector: 'app-meal-detail',
  templateUrl: './meal-detail.component.html',
  styleUrls: ['./meal-detail.component.css']
})
export class MealDetailComponent implements OnInit {
  
  @Input() meal: Meal;
  @Output() detailsHide = new EventEmitter();

  /************************ START FUNCTIONS ************************/

  

  hideInfo(){
    this.detailsHide.emit();
  }

  /************************ END FUNCTIONS ************************/

  constructor() { }

  ngOnInit() {
  }

}
