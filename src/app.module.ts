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

@Module({
  imports: [UsersModule, MemosModule, SchedulesModule, TakingInfosModule],
  controllers: [AppController, SchedulesController, UsersController, TakingInfosController, MemosController],
  providers: [AppService, UsersService, TakingInfosService, MemosService, SchedulesService],
})
export class AppModule {}
