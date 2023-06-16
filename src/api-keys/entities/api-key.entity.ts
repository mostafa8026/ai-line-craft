import { UserEntity } from 'src/users/entities/user.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  Generated,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('apiKey')
export class ApiKeyEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Generated('uuid')
  @Column({
    unique: true,
  })
  apiKey: string;

  @CreateDateColumn()
  createdAt: Date;

  @ManyToOne(() => UserEntity, (user) => user.apikeys, {
    eager: true,
  })
  user: UserEntity;
}
