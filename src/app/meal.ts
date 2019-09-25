export class Meal {
    showDetails: boolean;
    showDetailsBtn: boolean;
    showMeal: boolean;
    constructor(
        public id: number,
        public food: string,
        public calories: number,
        public details: string
    ){
        this.showDetails = false;
        this.showDetailsBtn = true;
        this.showMeal = true;
    }
}
