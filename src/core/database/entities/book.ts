
import { Entity, Column, PrimaryGeneratedColumn, OneToOne, ManyToOne, JoinColumn, OneToMany } from 'typeorm';
import { Category } from './category';
import { Review } from './review';

@Entity('Books')
export class Book {

  @PrimaryGeneratedColumn()
  id: number;

  @Column("varchar")
  title: string;

  @Column("text")
  description: string;

  @Column("varchar")
  cover: string;

  @Column("int")
  price: number;

  @OneToMany(type => Category, category => category.books)
  @JoinColumn({name: "id"})
  category: Category;

  @ManyToOne(type => Review, review => review.book)
  @JoinColumn({name: "id"})
  reviews: Review[];

  constructor() {
    this.id = 0;
    this.title = "";
    this.description = "";
    this.cover = "";
    this.price = 0;
    this.category = null;
    this.reviews = [];

  }

}