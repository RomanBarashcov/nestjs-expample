import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BookRepository } from '../repositories/book.repository';
import { Book } from '../../../../core/database/entities/book';

@Injectable()
export class BookService {

  constructor(@InjectRepository(BookRepository) 
    private readonly bookRepository: BookRepository) {}

  async findAllBooks(): Promise<any> {
    return await this.bookRepository.getAll();
  }

}
