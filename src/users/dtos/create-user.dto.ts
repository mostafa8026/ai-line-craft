import { OmitType } from '@nestjs/mapped-types';
import { UserEntity } from 'src/users/entities/user.entity';

export class CreateUserDTO extends OmitType(UserEntity, ['id'] as const) {}
