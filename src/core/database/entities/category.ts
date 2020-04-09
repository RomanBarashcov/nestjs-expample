
import { Entity, Column, ManyToOne, JoinColumn, PrimaryGeneratedColumn } from 'typeorm';
import { Book } from '../entities/book';

@Entity('Categories')
export class Category {
    
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  type: string;

  @ManyToOne(type => Book, book => book.category)
  @JoinColumn({name: "id"})
  books: Book[]

}