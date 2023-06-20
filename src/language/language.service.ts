import { Injectable } from '@nestjs/common';
import { CreateLanguageDto } from './dto/create-language.dto';
import { UpdateLanguageDto } from './dto/update-language.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { LanguageEntity } from './entities/language.entity';
import { Repository } from 'typeorm';

@Injectable()
export class LanguageService {
  constructor(
    @InjectRepository(LanguageEntity)
    private readonly _languageRepository: Repository<LanguageEntity>,
  ) {}

  create(createLanguageDto: CreateLanguageDto) {
    return this._languageRepository.save(createLanguageDto);
  }

  findAll() {
    return this._languageRepository.find();
  }

  findOne(shortName: string) {
    return this._languageRepository.findOneBy({
      shortName,
    });
  }

  update(id: number, updateLanguageDto: UpdateLanguageDto) {
    return `This action updates a #${id} language`;
  }

  remove(id: number) {
    return `This action removes a #${id} language`;
  }
}
