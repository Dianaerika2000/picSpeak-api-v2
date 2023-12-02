import { Body, Controller, Get, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { ChatGptApiService } from './chat-gpt-api.service';
import { GetAiModelAnswer } from './model/get-ai-model-answer';

@Controller('chat-gpt-api')
export class ChatGptApiController {
  constructor(private readonly chatGptApiService: ChatGptApiService) {}

  @Post("/message")
    @UsePipes(ValidationPipe)
    getModelAnswer(@Body() data: GetAiModelAnswer) {
        return this.chatGptApiService.getModelAnswer(data);
    }

    @Get("/model")
    listModels(){
        return this.chatGptApiService.listModels();
    }
}
