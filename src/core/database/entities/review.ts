
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn, OneToMany } from 'typeorm';
import { Book } from './book';
import { User } from './user';

@Entity('Reviews')
export class Review {
    
  @PrimaryGeneratedColumn()
  id: number;

  @OneToMany(type => User, user => user.reviews)
  @JoinColumn({name: 'userId'})
  user: User;

  @OneToMany(type => Book, Book => Book.reviews)
  @JoinColumn({name: 'bookId'})
  book: Book;

  @Column("text")
  review: string;

  @Column("int")
  rating: number

  constructor() {
    this.id = 0;
    this.user = new User();
    this.book = new Book();
    this.review = "";
    this.rating = 5;
  }
  
}