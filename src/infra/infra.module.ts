import { Global, Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EventEmitterModule } from '@nestjs/event-emitter';

import { TypeOrmConfig } from './typeorm.config';
import { configs } from './config';

@Global()
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: ['.env', '.env.development', '.env.production'],
    }),
    TypeOrmModule.forRootAsync({
      inject: [TypeOrmConfig],
      useFactory: (config: TypeOrmConfig) => config,
    }),
    EventEmitterModule.forRoot({
      wildcard: true,
    }),
  ],
  providers: [],
  exports: [],
})
export class InfraModule {}
