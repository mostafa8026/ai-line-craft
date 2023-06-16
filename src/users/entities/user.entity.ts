import { IsNumber, IsOptional, IsString } from 'class-validator';
import { ApiKeyEntity } from 'src/api-keys/entities/api-key.entity';
import { EventEntity } from 'src/event/entities/event.entity';
import { TranslationEntity } from 'src/translation/entities/translation.entity';
import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('user')
export class UserEntity {
  @IsNumber()
  @PrimaryGeneratedColumn()
  id: number;

  @IsString()
  @Column()
  name: string;

  @IsOptional()
  @JoinTable()
  @ManyToMany(() => TranslationEntity, (translation) => translation.users)
  translations?: TranslationEntity[];

  @IsOptional()
  @OneToMany(() => EventEntity, (event) => event.user)
  events?: EventEntity[];

  @IsOptional()
  @OneToMany(() => ApiKeyEntity, (api) => api.user)
  apikeys?: ApiKeyEntity[];
}
