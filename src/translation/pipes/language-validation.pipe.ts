import { ArgumentMetadata, BadRequestException, Injectable, PipeTransform } from '@nestjs/common';
import { LanguageService } from '../../language/language.service';

@Injectable()
export class LanguageValidationPipe implements PipeTransform {
  constructor(private readonly _languageService: LanguageService) {}

  async transform(value: string, metadata: ArgumentMetadata) {
    const supportedLanguages = await this._languageService.findAll();
    const isLanguageSupported = supportedLanguages.some(
      (language) => language.shortName === value,
    );
    if (!isLanguageSupported) {
      throw new BadRequestException('Language not supported');
    }
    return value;
  }
}
