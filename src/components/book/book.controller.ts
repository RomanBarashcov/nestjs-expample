import { Controller, Get, Param, Post, Body, Put } from '@nestjs/common';
import { BookService } from './providers/services/bookService';
import { Book } from '../../core/database/entities/book';
import { CreateReviewDto } from '../../components/book/dto/review/crate.review.dto';
import { UpdateReviewDto } from './dto/review/update.review.dto';

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

  @Post('/reviews')
  async addReview(@Body() createReviewDto: CreateReviewDto): Promise<any> {

    return this.bookService.saveReview(createReviewDto);

  }

  @Put('/reviews')
  async updateReview(@Body() updateReviewDto: UpdateReviewDto): Promise<any> {

    return await this.bookService.updateReview(updateReviewDto);

  }

}
