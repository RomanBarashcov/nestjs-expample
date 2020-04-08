
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('Categories')
export class Category {
    
  @PrimaryGeneratedColumn()
  Id: number;

  @Column()
  Type: string;

}