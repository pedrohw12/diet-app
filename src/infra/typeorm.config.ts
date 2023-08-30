import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { ConfigType, registerAs } from '@nestjs/config';

export const config = registerAs<TypeOrmModuleOptions>('typeorm', () => {
  return {
    schema: 'public',
    type: 'postgres',
    port: 5432,
    host: 'localhost',
    username: 'study',
    password: 'docker',
    database: 'postgres',
    autoLoadEntities: true,
    /**
     * ATTENTION - Synchronize
     *
     * Do NOT turn this ON when pointing to a database on the cloud.
     * This is ONLY for local development.
     */
    synchronize: false,
    logging: ['error'],

    // uncomment when use local database
    pool: {
      max: 100,
    },
    extra: {
      trustServerCertificate: true,
    },
    requestTimeout: 30000,
    connectionTimeout: 30000,
    maxQueryExecutionTime: 30000,
    entities: [__dirname + '/db/orm/entity/*.entity{.ts,.js}'],
  };
});

export default config;
export const TypeOrmConfig = config.KEY;
export type TypeOrmConfig = ConfigType<typeof config>;
