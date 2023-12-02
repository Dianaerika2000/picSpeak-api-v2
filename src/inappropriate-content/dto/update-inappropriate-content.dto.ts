import { PartialType } from '@nestjs/swagger';
import { CreateInappropriateContentDto } from './create-inappropriate-content.dto';

export class UpdateInappropriateContentDto extends PartialType(CreateInappropriateContentDto) {}
