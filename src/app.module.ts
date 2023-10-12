import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ChatGateway } from './chat.gateway';
import { ExpressAdapter } from '@nestjs/platform-express';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, ChatGateway, ExpressAdapter],
})
export class AppModule {}
