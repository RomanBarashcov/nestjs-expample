
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('Roles')
export class Role {
    
  @PrimaryGeneratedColumn()
  Id: number;

  @Column()
  Type: string;

}