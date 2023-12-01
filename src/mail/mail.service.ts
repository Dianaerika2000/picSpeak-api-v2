import { MailerService } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';

@Injectable()
export class MailService {
  constructor(
    private mailerService: MailerService
  ) {}

  async sendVerificationEmail(email: string, token: string) {
    await this.mailerService.sendMail({
      to: email,
      template: './confirmation.hbs',
      subject: 'Verifica tu correo electrónico',
      context: {
        name: email,
        token,
      },
    });
  }
}
