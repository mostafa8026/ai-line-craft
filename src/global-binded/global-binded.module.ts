import { Module } from '@nestjs/common';
import { APP_FILTER } from '@nestjs/core';
import { ErrorsModule } from './../errors/errors.module';
import { ErrorMonitorFilter } from './filters/error-monitor.filter';

@Module({
  imports: [ErrorsModule],
  providers: [
    {
      provide: APP_FILTER,
      useClass: ErrorMonitorFilter,
    },
  ],
})
export class GlobalBindedModule {}
