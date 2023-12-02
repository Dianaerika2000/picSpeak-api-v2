import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseIntPipe,
  Put,
} from '@nestjs/common';
import { NacionalityService } from './nacionality.service';
import { CreateNacionalityDto } from './dto/create-nacionality.dto';
import { UpdateNacionalityDto } from './dto/update-nacionality.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('nacionality')
@Controller('nacionality')
export class NacionalityController {
  constructor(private readonly nacionalityService: NacionalityService) {}

  @Get()
  getNacionalities() {
    return this.nacionalityService.getNacionalities();
  }

  @Post()
  createNacionality(@Body() newNacionality: CreateNacionalityDto) {
    return this.nacionalityService.createNacionality(newNacionality);
  }

  //Registrar una lista de nacioalidades
  @Post('create')
  createNacionalities(@Body() newNationalities: CreateNacionalityDto[]) {
    return this.nacionalityService.createNacionalities(newNationalities);
  }

  @Get(':id')
  getNacionality(@Param('id', ParseIntPipe) id: number) {
    return this.nacionalityService.getNacionality(id);
  }

  @Delete(':id')
  deleteNacionality(@Param('id', ParseIntPipe) id: number) {
    return this.nacionalityService.deleteNacionality(id);
  }

  @Put(':id')
  updateNacionality(
    @Param('id', ParseIntPipe) id: number,
    @Body() nacionality: UpdateNacionalityDto,
  ) {
    return this.nacionalityService.updateNacionality(id, nacionality);
  }
}
