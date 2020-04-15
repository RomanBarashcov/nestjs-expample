export class BaseReviewDto {
    
    id: number;
    type: string;
    review: string;
    rating: number;
    
    constructor() {
        this.id = 0;
        this.type = "";
    }
}