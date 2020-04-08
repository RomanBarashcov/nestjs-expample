import { Controller, Get } from '@nestjs/common';
import { BookService } from './providers/services/bookService';
import { Book } from '../../core/database/entities/book';

@Controller('/api/books')
export class BookController {

  constructor(private readonly bookService: BookService) {}

  @Get()
  async getBooks(): Promise<any>  {
    return await this.bookService.findAllBooks();
  }

}
