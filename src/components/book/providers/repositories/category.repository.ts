import { EntityRepository, Repository, UpdateResult } from 'typeorm';
import { Category } from '../../../../core/database/entities/category';

@EntityRepository(Category)
export class CategoryRepository extends Repository<Category> {

    async findCategoryById(id: number): Promise<Category> {

         return await this.findOne({id: id});

    }

}