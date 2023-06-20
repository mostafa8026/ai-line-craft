import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigurationModule } from './configuration/configuration.module';
import { ErrorsModule } from './errors/errors.module';
import { EventModule } from './event/event.module';
import { GlobalBindedModule } from './global-binded/global-binded.module';
import { MyLoggerModule } from './my-logger/my-logger.module';
import { TranslationModule } from './translation/translation.module';
import { UsersModule } from './users/users.module';
import { ApiKeysModule } from './api-keys/api-keys.module';
import { LanguageModule } from './language/language.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      database: 'ailine',
      username: 'postgres',
      password: 'postgres',
      synchronize: true,
      autoLoadEntities: true,
    }),
    UsersModule,
    TranslationModule,
    EventModule,
    MyLoggerModule,
    ConfigurationModule,
    GlobalBindedModule,
    ErrorsModule,
    GlobalBindedModule,
    ApiKeysModule,
    LanguageModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
