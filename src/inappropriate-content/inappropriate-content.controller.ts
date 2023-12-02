import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Put,
  ParseIntPipe,
} from '@nestjs/common';
import { InappropriateContentService } from './inappropriate-content.service';
import { CreateInappropriateContentDto } from './dto/create-inappropriate-content.dto';
import { UpdateInappropriateContentDto } from './dto/update-inappropriate-content.dto';

@Controller('inappropriate-content')
export class InappropriateContentController {
  constructor(
    private readonly inappropriateContentService: InappropriateContentService,
  ) {}

  @Get()
  getInappropriateContents() {
    return this.inappropriateContentService.getInappropriateContents();
  }

  @Post()
  createInappropriateContent(
    @Body() newInappropriateContent: CreateInappropriateContentDto,
  ) {
    return this.inappropriateContentService.createInappropriateContent(
      newInappropriateContent,
    );
  }

  @Post('create')
  createInappropriateContents(
    @Body() newInappropriateContent: CreateInappropriateContentDto[],
  ) {
    return this.inappropriateContentService.createInappropriateContents(
      newInappropriateContent,
    );
  }

  @Get(':id')
  getInappropriateContent(@Param('id', ParseIntPipe) id: number) {
    return this.inappropriateContentService.getInappropriateContent(id);
  }

  @Delete(':id')
  deleteInappropriateContent(@Param('id', ParseIntPipe) id: number) {
    return this.inappropriateContentService.deleteInappropriateContent(id);
  }

  @Put(':id')
  updateInappropriateContent(
    @Param('id', ParseIntPipe) id: number,
    @Body() Language: UpdateInappropriateContentDto,
  ) {
    return this.inappropriateContentService.updateInappropriateContent(
      id,
      Language,
    );
  }
}
