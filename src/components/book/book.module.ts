import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BookController } from './book.controller';
import { BookService } from './providers/services/bookService';
import { Book } from '../../core/database/entities/book';
import { BookRepository } from './providers/repositories/book.repository';

@Module({
  imports: [TypeOrmModule.forFeature([
    Book, BookRepository
  ])],
  controllers: [BookController],
  providers: [BookService],
})
export class BookModule {}
