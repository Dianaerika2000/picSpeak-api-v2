import { Module } from '@nestjs/common';
import { ChatGptApiService } from './chat-gpt-api.service';
import { ChatGptApiController } from './chat-gpt-api.controller';

@Module({
  controllers: [ChatGptApiController],
  providers: [ChatGptApiService],
})
export class ChatGptApiModule {}
