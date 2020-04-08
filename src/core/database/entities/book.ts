
import { Entity, Column, PrimaryGeneratedColumn, OneToOne, ManyToOne, JoinColumn, ManyToMany } from 'typeorm';
import { Category } from './category';
import { Review } from './review';

@Entity('Books')
export class Book {

  @PrimaryGeneratedColumn()
  Id: number;

  @Column("varchar")
  Title: string;

  @Column("text")
  Description: string;

  @Column("varchar")
  Cover: string;

  @Column("int")
  Price: number;

  @OneToOne(type => Category)
  @JoinColumn({name: "CategoryId"})
  Category: Category;

  @ManyToOne(type => Review, Review => Review.Book)
  @JoinColumn({name: "Id"})
  Reviews: Review[];

}