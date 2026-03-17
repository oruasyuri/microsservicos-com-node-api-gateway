import { Module } from '@nestjs/common';
import { ThrottlerModule } from '@nestjs/throttler';
import { LoggingMiddleware } from './logging/logging.middleware';

@Module({
  imports: [
    ThrottlerModule.forRoot([
      {
        ttl: 1000 * 60, // Time-to-live in milliseconds (60 seconds)
        limit: 100, // Maximum number of requests within the TTL context
      },
    ]),
  ],
  providers: [LoggingMiddleware],
})
export class MiddlewareModule {}
