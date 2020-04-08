
import { Entity, Column, PrimaryGeneratedColumn, OneToOne, ManyToOne, JoinColumn, OneToMany } from 'typeorm';
import { Role } from './role';
import { Review } from './review';

@Entity('Users')
export class User {

  @PrimaryGeneratedColumn()
  Id: number;

  @Column("varchar")
  Email: string;

  @Column("int")
  Phone: number;

  @Column("varchar")
  Password: string;

  @Column("varchar")
  Avatar: string;

  @OneToOne(type => Role)
  @JoinColumn()
  Role: Role

  @OneToMany(type => Review, review => review.Book)
  @JoinColumn({name: "Id"})
  Reviews: Review[];

}