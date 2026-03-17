import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ThrottlerModule } from '@nestjs/throttler';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LoggingMiddleware } from './middleware/logging/logging.middleware';
import { MiddlewareModule } from './middleware/middleware.module';
import { ProxyModule } from './proxy/proxy.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    ThrottlerModule.forRoot([
      {
        name: 'short',
        ttl: 1000, // Time-to-live in milliseconds (1 second)
        limit: 10, // Maximum number of requests within the TTL context
      },
      {
        name: 'medium',
        ttl: 1000 * 60, // Time-to-live in milliseconds (1 minute)
        limit: 100, // Maximum number of requests within the TTL context
      },
      {
        name: 'long',
        ttl: 1000 * 60 * 15, // Time-to-live in milliseconds (15 minutes)
        limit: 1000, // Maximum number of requests within the TTL context
      },
    ]),
    ProxyModule,
    MiddlewareModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggingMiddleware).forRoutes('*');
  }
}
