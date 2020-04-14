import { EntityRepository, Repository, UpdateResult } from 'typeorm';
import { Review } from '../../../../core/database/entities/review';
import { CreateReviewDto } from '../../dto/review/crate.review.dto';
import { UpdateReviewDto } from '../../dto/review/update.review.dto';
import { DataMapper } from '../../../../core/lib/dataMapper/index';

@EntityRepository(Review)
export class ReviewRepository extends Repository<Review> {

    async createReview(review: CreateReviewDto): Promise<CreateReviewDto> {

        let newReview: Review = new DataMapper<CreateReviewDto, Review>(review, new Review()).executeMap();
        let resNewReview: Review = await this.create(newReview);
        return new DataMapper<Review, CreateReviewDto>(resNewReview, new CreateReviewDto()).executeMap();

    }

    async updateReview(review: UpdateReviewDto): Promise<UpdateResult> {

        let upReview: Review = new DataMapper<UpdateReviewDto, Review>(review, new Review()).executeMap();
        return await this.update(review.id, upReview);
        
    }

}