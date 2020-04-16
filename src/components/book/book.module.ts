import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BookController } from './book.controller';
import { BookService } from './providers/services/bookService';
import { Book } from '../../core/database/entities/book';
import { Review } from '../../core/database/entities/review';
import { BookRepository } from './providers/repositories/book.repository';
import { ReviewRepository } from './providers/repositories/review.repository';
import { Category } from '../../core/database/entities/category';
import { CategoryRepository } from './providers/repositories/category.repository';

@Module({
  imports: [TypeOrmModule.forFeature([
    Book, BookRepository,
    Review, ReviewRepository,
    Category, CategoryRepository
  ])],
  controllers: [BookController],
  providers: [BookService],
})
export class BookModule {}
