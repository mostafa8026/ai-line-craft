import { IsString } from 'class-validator';
import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryColumn,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('language')
export class LanguageEntity {
  @PrimaryColumn()
  @IsString()
  name: string;

  @Column({
    unique: true,
  })
  @IsString()
  shortName: string;

  @CreateDateColumn()
  createdAt: Date;
}
