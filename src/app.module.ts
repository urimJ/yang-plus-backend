import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SchedulesController } from './schedules/schedules.controller';
import { UsersController } from './users/users.controller';
import { TakingInfosController } from './taking-infos/taking-infos.controller';
import { MemosController } from './memos/memos.controller';
import { UsersService } from './users/users.service';
import { TakingInfosService } from './taking-infos/taking-infos.service';
import { MemosService } from './memos/memos.service';
import { SchedulesService } from './schedules/schedules.service';
import { UsersModule } from './users/users.module';
import { MemosModule } from './memos/memos.module';
import { SchedulesModule } from './schedules/schedules.module';
import { TakingInfosModule } from './taking-infos/taking-infos.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { getTypeOrmConfig } from './config/database.config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, // ConfigModule을 전역 모듈로 설정하여 어디서든 사용 가능
      envFilePath: '.env', // 환경 변수 파일 경로 설정
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: getTypeOrmConfig,
    }),
    UsersModule,
    MemosModule,
    SchedulesModule,
    TakingInfosModule,
  ],
  controllers: [
    AppController,
    SchedulesController,
    UsersController,
    TakingInfosController,
    MemosController,
  ],
  providers: [
    AppService,
    UsersService,
    TakingInfosService,
    MemosService,
    SchedulesService,
  ],
})
export class AppModule {}
