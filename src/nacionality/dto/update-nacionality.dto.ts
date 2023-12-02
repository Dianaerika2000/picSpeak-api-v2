import { PartialType } from '@nestjs/swagger';
import { CreateNacionalityDto } from './create-nacionality.dto';

export class UpdateNacionalityDto extends PartialType(CreateNacionalityDto) {}
