import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserDTO } from 'src/users/dtos/create-user.dto';
import { UserEntity } from 'src/users/entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
  ) {}

  createUser(user: CreateUserDTO) {
    return this.userRepository.save(user);
  }

  getAll() {
    return this.userRepository.find({
      relations: ['apikeys'],
    });
  }

  findUser(userId) {
    return this.userRepository.findOneBy({
      id: userId,
    });
  }
}
