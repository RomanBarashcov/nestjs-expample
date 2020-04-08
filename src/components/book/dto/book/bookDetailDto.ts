import { BaseBookDto } from './baseBookDto';
import { BaseReviewDto } from '../review/baseReviewDto';

export class BookDetailDto extends BaseBookDto {

    reviews: BaseReviewDto[];

}