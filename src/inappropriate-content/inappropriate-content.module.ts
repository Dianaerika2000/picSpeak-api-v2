import { Module } from '@nestjs/common';
import { InappropriateContentService } from './inappropriate-content.service';
import { InappropriateContentController } from './inappropriate-content.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { InappropriateContent } from './entities/inappropriate-content.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      InappropriateContent
    ]),
  ],
  controllers: [InappropriateContentController],
  providers: [InappropriateContentService],
})
export class InappropriateContentModule {}
