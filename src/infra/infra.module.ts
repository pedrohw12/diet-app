import { Global, Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { EventEmitterModule } from '@nestjs/event-emitter';

import { TypeOrmConfig } from './typeorm.config';
import { configs } from './config';
import { FoodModule } from 'src/food/food.module';
import { FoodService } from 'src/food/food.service';

@Global()
@Module({
  imports: [TypeOrmModule.forRoot(), FoodModule],
  providers: [],
  exports: [],
})
export class InfraModule {}
