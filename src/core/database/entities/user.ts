
import { Entity, Column, PrimaryGeneratedColumn, OneToOne, ManyToOne, JoinColumn, OneToMany } from 'typeorm';
import { Role } from './role';
import { Review } from './review';

@Entity('Users')
export class User {

  @PrimaryGeneratedColumn()
  id: number;

  @Column("varchar")
  email: string;

  @Column("int")
  phone: number;

  @Column("varchar")
  password: string;

  @Column("varchar")
  avatar: string;

  @ManyToOne(ype => Role, role => role.users)
  role: Role;

  @OneToMany(type => Review, review => review.book)
  @JoinColumn({name: "id"})
  reviews: Review[];

}