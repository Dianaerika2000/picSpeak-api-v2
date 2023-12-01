import { Body, Controller, Post } from '@nestjs/common';
import { MailService } from './mail.service';

@Controller('mail')
export class MailController {
  constructor(private readonly mailService: MailService) {}

  @Post()
  create(@Body('email') email: string, @Body('token') token: string) {
    return this.mailService.sendVerificationEmail(email, token);
  }
  
}
