import { EntityRepository, Repository } from 'typeorm';
import { Book } from '../../../../core/database/entities/book';
import { DataMapper } from '../../../../core/lib/dataMapper/index';
import { BookDetailDto } from '../../dto/book/book.detail.dto';

@EntityRepository(Book)
export class BookRepository extends Repository<Book> {

    async getAll(): Promise<Book[]> {

        return await this.find({
            join: {
                alias: "b",
                leftJoinAndSelect: {
                    category: "b.category"
                }
            }
        });

    }

    async getById(id: number): Promise<BookDetailDto> {

        
        let book = await this.findOne({id: id}, {
            join: {
                alias: "b",
                leftJoinAndSelect: {
                    category: "b.category",
                    reviews: "b.reviews"
                }
            }
        });

        return new DataMapper<Book, BookDetailDto>(book, new BookDetailDto()).executeMap();
    }

    async getAllByCategory(id: number): Promise<Book[]> {

        return await this.createQueryBuilder('Books')
                        .select(["Books", "category", "reviews"])
                        .leftJoin("Books.category", "category")
                        .leftJoin("Books.reviews", "reviews")
                        .where("category.id = :id", {id: id}).getMany();

    }

}