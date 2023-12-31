import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('errors')
export class ErrorEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  message: string;

  @CreateDateColumn()
  createdAt: Date;
}
