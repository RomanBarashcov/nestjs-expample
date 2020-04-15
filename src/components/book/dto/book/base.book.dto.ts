import { CategoryDto } from '../category/category.dto';
import { BaseReviewDto } from '../review/base.review.dto';

export class BaseBookDto {
    
    id: number;
    title: string;
    description: string;
    cover: string;
    price: number;
    category: CategoryDto;
    reviews: BaseReviewDto[];

    constructor() {
        this.id = 0;
        this.title = "";
        this.description = "";
        this.cover = "";
        this.price = 0;
        this.category = null;
        this.reviews = [];
    }
}