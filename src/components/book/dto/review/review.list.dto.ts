import { BaseReviewDto } from './base.review.dto';

export class ReviewListDto {

    reviews: BaseReviewDto[]

    constructor() {
        this.reviews = [];
    }
}