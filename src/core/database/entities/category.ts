
import { Entity, Column, ManyToOne, JoinColumn, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Book } from '../entities/book';

@Entity('Categories')
export class Category {
    
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  type: string;

  @OneToMany(type => Book, book => book.category)
  books: Book[]

}