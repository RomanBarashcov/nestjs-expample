import { BaseBookDto } from './base.book.dto';
import { BaseReviewDto } from '../review/base.review.dto';

export class BookDetailDto extends BaseBookDto {

    reviews: BaseReviewDto[];

    constructor() {
        super()
        this.reviews = [];
    }
    
}