import { BaseReviewDto } from './base.review.dto';
import { BaseBookDto } from '../book/base.book.dto';
import { BaseUserDto } from '../user/base.user.dto';

export class CreateReviewDto extends BaseReviewDto {

    book: BaseBookDto;
    user: BaseUserDto

    constructor() {
        super();
        this.book = new BaseBookDto();
        this.user = new BaseUserDto();
    }
}