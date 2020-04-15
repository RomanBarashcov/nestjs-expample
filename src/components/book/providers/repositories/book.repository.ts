import { EntityRepository, Repository } from 'typeorm';
import { Book } from '../../../../core/database/entities/book';
import { DataMapper } from '../../../../core/lib/dataMapper/index';
import { BaseBookDto } from '../../dto/book/base.book.dto';

@EntityRepository(Book)
export class BookRepository extends Repository<Book> {

    async getAll(): Promise<BaseBookDto[]> {

        let books = await this.find({
            join: {
                alias: "b",
                leftJoinAndSelect: {
                    category: "b.category"
                }
            }
        });


        return new DataMapper<Book[], BaseBookDto[]>(books, [new BaseBookDto()]).executeMap() as BaseBookDto[];

    }

    async getById(id: number): Promise<BaseBookDto> {

        
        let book = await this.findOne({id: id}, {
            join: {
                alias: "b",
                leftJoinAndSelect: {
                    category: "b.category",
                    reviews: "b.reviews"
                }
            }
        });

        return new DataMapper<Book, BaseBookDto>(book, new BaseBookDto()).executeMap() as BaseBookDto;
    }

    async getAllByCategory(id: number): Promise<Book[]> {

        return await this.createQueryBuilder('Books')
                        .select(["Books", "category", "reviews"])
                        .leftJoin("Books.category", "category")
                        .leftJoin("Books.reviews", "reviews")
                        .where("category.id = :id", {id: id}).getMany();

    }

}