
import { Entity, Column, OneToMany, JoinColumn, PrimaryGeneratedColumn } from 'typeorm';
import { User } from '../entities/user';

@Entity('Roles')
export class Role {
    
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  type: string;

  @OneToMany(type => User, user => user.role)
  users: User[]

}