import { Controller, Get, Param } from '@nestjs/common';
import { BookService } from './providers/services/bookService';
import { Book } from '../../core/database/entities/book';

@Controller('/api/books')
export class BookController {

  constructor(private readonly bookService: BookService) {}

  @Get()
  async getBooks(): Promise<any> {

    return await this.bookService.findAllBooks();

  }
  
  @Get('/:id')
  async getBook(@Param() param): Promise<any> {

    return await this.bookService.findById(parseInt(param.id, 10));

  }

  @Get('/category/:id')
  async getBooksByCategory(@Param() param): Promise<any> {

    return await this.bookService.findAllByCategory(parseInt(param.id, 10));

  }

}
