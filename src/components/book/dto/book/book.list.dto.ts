import { BaseBookDto } from './base.book.dto';

export class BookListDto {

    books: BaseBookDto[];

    constructor() {
        this.books = [];
    }
}