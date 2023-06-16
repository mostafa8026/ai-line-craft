import { Module } from '@nestjs/common';
import { ErrorsController } from './errors.controller';
import { ErrorsService } from './errors.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ErrorEntity } from 'src/errors/entities/error.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ErrorEntity])],
  controllers: [ErrorsController],
  providers: [ErrorsService],
  exports: [ErrorsService],
})
export class ErrorsModule {}
