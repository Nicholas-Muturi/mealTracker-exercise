export class Meal {
    showDetails: boolean;
    showDetailsBtn: boolean;
    constructor(
        public id: number,
        public name: string,
        public calories: number,
        public details: string
    ){
        this.showDetails = false;
        this.showDetailsBtn = true;
    }
}
