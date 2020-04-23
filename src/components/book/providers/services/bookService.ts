import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BookRepository } from '../repositories/book.repository';
import { ReviewRepository } from '../repositories/review.repository';
import { CategoryRepository } from '../repositories/category.repository';
import { CreateBookDto } from '../../dto/book/create.book.dto';
import { CreateReviewDto } from '../../dto/review/crate.review.dto';
import { UpdateReviewDto } from '../../dto/review/update.review.dto';

@Injectable()
export class BookService {

  constructor(@InjectRepository(BookRepository)
    private readonly bookRepository: BookRepository,
    @InjectRepository(ReviewRepository)
    private readonly reviewRepository: ReviewRepository,
    @InjectRepository(CategoryRepository)
    private readonly categoryRepository: CategoryRepository) {}

  async findAllBooks(): Promise<any> {

    return await this.bookRepository.findAll();

  }

  async findById(id: number): Promise<any> {

    return await this.bookRepository.findById(id);

  }

  async findAllByCategory(id: number): Promise<any> {

    return await this.bookRepository.findAllByCategory(id);

  }

  async saveBook(book: CreateBookDto): Promise<any> {

    book.category = await this.categoryRepository.findCategoryById(book.category.id);
    return await this.bookRepository.createBook(book);

  }

  async saveReview(review: CreateReviewDto): Promise<CreateReviewDto> {
    
    return await this.reviewRepository.createReview(review);

  }

  async updateReview(review: UpdateReviewDto): Promise<any> {

    return await this.reviewRepository.updateReview(review);

  } 

}
