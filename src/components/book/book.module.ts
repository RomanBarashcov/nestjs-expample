import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BookController } from './book.controller';
import { BookService } from './providers/services/bookService';
import { Book } from '../../core/database/entities/book';
import { Review } from '../../core/database/entities/review';
import { BookRepository } from './providers/repositories/book.repository';
import { ReviewRepository } from './providers/repositories/review.repository';

@Module({
  imports: [TypeOrmModule.forFeature([
    Book, BookRepository,
    Review, ReviewRepository
  ])],
  controllers: [BookController],
  providers: [BookService],
})
export class BookModule {}
