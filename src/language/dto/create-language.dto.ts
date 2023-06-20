import { OmitType } from "@nestjs/mapped-types";
import { LanguageController } from "../language.controller";
import { LanguageEntity } from "../entities/language.entity";

export class CreateLanguageDto extends OmitType(LanguageEntity, ['createdAt'] as const) {}
