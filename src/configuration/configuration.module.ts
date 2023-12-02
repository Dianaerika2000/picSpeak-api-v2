import { Module } from '@nestjs/common';
import { ConfigurationService } from './configuration.service';
import { ConfigurationController } from './configuration.controller';
import { InappropriateContentUser } from './entities/inappropriate_content_user.entity';
import { InterestUser } from './entities/interest_user.entity';
import { LanguageUser } from './entities/language_user.entity';
import { IndividualUser } from 'src/users/entities/individual-user.entity';
import { Nacionality } from 'src/nacionality/entities/nacionality.entity';
import { InappropriateContent } from 'src/inappropriate-content/entities/inappropriate-content.entity';

@Module({
  imports: [
    InappropriateContentUser,
    InterestUser,
    LanguageUser,
    IndividualUser,
    Nacionality,
    InappropriateContent,
    
  ],
  controllers: [ConfigurationController],
  providers: [ConfigurationService],
})
export class ConfigurationModule {}
