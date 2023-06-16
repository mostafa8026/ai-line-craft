import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Request } from 'express';
import { ApiKeysService } from 'src/api-keys/api-keys.service';

@Injectable()
export class ApiKeyGuard implements CanActivate {
  constructor(private apikeyService: ApiKeysService) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    console.log('can activate');
    const request = context.switchToHttp().getRequest<Request>();
    const apikey = request.headers['x-api-key'] as string;
    console.log('apikey header', apikey);
    const apikeyFound = await this.apikeyService.findOne(apikey);

    console.log('apikey', apikeyFound);

    if (apikeyFound) {
      return true;
    }

    return false;
  }
}
