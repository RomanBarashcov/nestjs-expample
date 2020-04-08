import { EntityRepository, Repository } from 'typeorm';
import { Book } from '../../../../core/database/entities/book';

@EntityRepository(Book)
export class BookRepository extends Repository<Book> {

    async getAll(): Promise<Book[]> {

        return await this.find({ relations: ["Reviews"] });

    }

}