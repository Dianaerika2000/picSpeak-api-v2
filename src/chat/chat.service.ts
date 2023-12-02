import { Injectable } from '@nestjs/common';

@Injectable()
export class ChatService {
  async joinRoom(client: any, room: string) {
    client.leaveAll();
  }
  
}
