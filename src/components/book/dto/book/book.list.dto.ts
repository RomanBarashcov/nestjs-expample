import { BaseBookDto } from './base.book.dto';
import { Book } from '../../../../core/database/entities/book';

export class BookListDto {

    books: BaseBookDto[];

    constructor() {
        this.books = [];
    }

    mapToDto(books2: Book[]): BaseBookDto[] {

        this.books = [];

        books2.forEach(i => {

            let book: BaseBookDto = new BaseBookDto();
            book.id = i.id;
            book.title = i.title;
            book.description = i.description;
            book.cover = i.cover;
            book.price = i.price;
            book.category = i.category;

            this.books.push(book);
        });

        return this.books;

    }
}