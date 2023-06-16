import { IsNumber } from 'class-validator';

export class CreateApiKeyDTO {
  @IsNumber()
  userId: number;
}
