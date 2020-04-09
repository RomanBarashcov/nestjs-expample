
import { Entity, Column, ManyToOne, JoinColumn, PrimaryGeneratedColumn } from 'typeorm';
import { User } from '../entities/user';

@Entity('Roles')
export class Role {
    
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  type: string;

  @ManyToOne(type => User, user => user.role)
  @JoinColumn({name: "id"})
  users: User[]

}