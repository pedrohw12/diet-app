import { ConfigType, registerAs } from '@nestjs/config';
import { DataSource } from 'typeorm';

//TODO: Add schema do load default variable values more ELEGANTLY
export const config = registerAs('app', () => ({
  port: +process.env.APP_PORT || 3000,
  api: {
    prefix: '/api/lcm',
  },
  cors: {
    isEnabled: true,
    origin: process.env.CORS_ORIGIN || 'http://localhost:3000',
  },
  swagger: {
    isEnabled: ['DEBUG', 'LOCAL', 'DEVELOPMENT'].includes(
      process.env.NODE_ENV.toUpperCase(),
    ),
  },
  longPolling: {
    timeoutInSeconds: +process.env.LONG_POLLING_TIMEOUT_IN_SECONDS || 10,
  },
  logRequest: {
    isEnabled: process.env.LOG_REQUEST === 'true',
  },
  defaults: {
    language: 'en-US',
  },
}));

export default config;
export const AppConfig = config.KEY;
export type AppConfig = ConfigType<typeof config>;
