import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { ApiKeysService } from './api-keys.service';
import { CreateApiKeyDTO } from './dtos/create-api-key.dto';

@Controller('api-keys')
export class ApiKeysController {
  constructor(private readonly apiKeysService: ApiKeysService) {}

  @Post()
  create(@Body() apikey: CreateApiKeyDTO) {
    return this.apiKeysService.create(apikey);
  }

  @Get()
  findAll() {
    return this.apiKeysService.findAll();
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.apiKeysService.remove(+id);
  }
}
