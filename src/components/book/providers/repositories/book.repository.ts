import { EntityRepository, Repository } from 'typeorm';
import { Book } from '../../../../core/database/entities/book';
import { DataMapper } from '../../../../core/lib/dataMapper/index';
import { BaseBookDto } from '../../dto/book/base.book.dto';
import { CreateBookDto } from '../../dto/book/create.book.dto';

@EntityRepository(Book)
export class BookRepository extends Repository<Book> {

    async findAll(): Promise<BaseBookDto[]> {

        let books: Book[] = await this.find({
            join: {
                alias: "b",
                leftJoinAndSelect: {
                    category: "b.category"
                }
            }
        });


        return new DataMapper<Book[], BaseBookDto[]>(books, [new BaseBookDto()]).executeMap() as BaseBookDto[];

    }

    async findById(id: number): Promise<BaseBookDto> {

        
        let book: Book = await this.findOne({id: id}, {
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

    async findAllByCategory(id: number): Promise<BaseBookDto[]> {

        let books = await this.createQueryBuilder('Books')
                        .select(["book", "category", "reviews"])
                        .from(Book, "book")
                        .leftJoin("book.category", "category")
                        .leftJoin("book.reviews", "reviews")
                        .where('"book"."categoryId" = :id', {id: id}).getMany();

        return new DataMapper<Book[], BaseBookDto[]>(books, [new BaseBookDto()]).executeMap() as BaseBookDto[];

    }

    async createBook(bookDto: CreateBookDto): Promise<any> {

    
        let book: Book = new DataMapper<CreateBookDto, Book>(bookDto, new Book()).executeMap() as Book;
  
        book = await this.save({
            title: book.title,
            description: book.description,
            cover: book.cover,
            price: book.price,
            category: book.category
        });

        return book;

    }

}