export class Meal {
    showDetails: boolean;
    constructor(
        public id: number,
        public name: string,
        public calories: number,
        public details: string
    ){
        this.showDetails = false;
    }
}
