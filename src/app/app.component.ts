import { Component } from '@angular/core';
import { SocketServiceFinalService } from './socket-service-final.service';
// import { WebSocketService } from './web-socket.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Websocket Angular client ';
  userName: string;
  message: string;
  output: any[] = [];
  feedback: string;

  constructor(private webSocket: SocketServiceFinalService) {}
  ngOnInit(): void {
    this.webSocket.listen('typing').subscribe((res) => {
      this.updateFeedBacK(res);
    });
    this.webSocket.listen('chat').subscribe((res) => {
      this.messageStack(res);
    });
  }
  messageStack(data) {
    this.feedback = '';
    if (!data) return;
    console.log('data', data);

    this.output.push(data);
  }
  updateFeedBacK(res: any) {
    this.feedback = `${this.userName} is typing..`;
    console.log(this.feedback);
  }

  messageTyping(): void {
    console.log(`${this.userName} is typing`);
    this.webSocket.emit('typing', this.userName);
  }

  sendMessage(): void {
    console.log({
      message: this.message,
      handle: this.userName,
    });
    this.webSocket.emit('chat', {
      message: this.message,
      handle: this.userName,
    });
    this.message = '';
  }
}
