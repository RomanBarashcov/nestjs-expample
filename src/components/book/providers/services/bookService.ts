import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BookRepository } from '../repositories/book.repository';
import { ReviewRepository } from '../repositories/review.repository';
import { CreateReviewDto } from '../../dto/review/crate.review.dto';
import { UpdateReviewDto } from '../../dto/review/update.review.dto';

@Injectable()
export class BookService {

  constructor(@InjectRepository(BookRepository)
    private readonly bookRepository: BookRepository,
    @InjectRepository(ReviewRepository)
    private readonly reviewRepository: ReviewRepository) {}

  async findAllBooks(): Promise<any> {

    return await this.bookRepository.getAll();

  }

  async findById(id: number): Promise<any> {

    return await this.bookRepository.getById(id);

  }

  async findAllByCategory(id: number): Promise<any> {

    return await this.bookRepository.getAllByCategory(id);

  }

  async saveReview(review: CreateReviewDto): Promise<CreateReviewDto> {
    
    return await this.reviewRepository.createReview(review);

  }

  async updateReview(review: UpdateReviewDto): Promise<any> {

    return await this.reviewRepository.updateReview(review);

  } 

}
