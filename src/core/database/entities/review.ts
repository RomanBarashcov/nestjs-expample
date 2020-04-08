
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn, OneToMany } from 'typeorm';
import { Book } from './book';
import { User } from './user';

@Entity('Reviews')
export class Review {
    
  @PrimaryGeneratedColumn()
  Id: number;

  @OneToMany(type => User, User => User.Reviews)
  @JoinColumn({name: 'UserId'})
  User: User;

  @OneToMany(type => Book, Book => Book.Reviews)
  @JoinColumn({name: 'BookId'})
  Book: Book;

  @Column("text")
  Review: string;

  @Column("int")
  Rating: number
  
}