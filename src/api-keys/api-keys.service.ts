import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateApiKeyDTO } from 'src/api-keys/dtos/create-api-key.dto';
import { UserService } from 'src/users/user.service';
import { Equal, Repository } from 'typeorm';
import { ApiKeyEntity } from './entities/api-key.entity';

@Injectable()
export class ApiKeysService {
  constructor(
    @InjectRepository(ApiKeyEntity)
    private readonly apiKeyRepository: Repository<ApiKeyEntity>,
    private readonly _userService: UserService,
  ) {}

  async create(apiKeyDto: CreateApiKeyDTO) {
    const user = await this._userService.findUser(apiKeyDto.userId);
    return this.apiKeyRepository.save({
      user,
    });
  }

  findAll() {
    return this.apiKeyRepository.find({
      /** You can either use relation here or you can pass eager: true to the entity relation */
      //relations: ['user'],
    });
  }

  findOne(apiKey: string) {
    return this.apiKeyRepository.findOneBy({
      apiKey: Equal(apiKey),
    });
  }

  remove(id: number) {
    return `This action removes a #${id} apiKey`;
  }
}
