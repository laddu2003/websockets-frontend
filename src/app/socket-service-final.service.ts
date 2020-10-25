import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import * as io from 'socket.io-client';
@Injectable({
  providedIn: 'root',
})
export class SocketServiceFinalService {
  socket: SocketIOClient.Socket;
  constructor() {
    this.socket = io.connect('http://localhost:3000');
  }
  listen(eventName: any): Observable<any> {
    return new Observable((subscribe) => {
      this.socket.on(eventName, (data) => {
        subscribe.next(data);
      });
    });
  }
  emit(eventName: any, data: any) {
    this.socket.emit(eventName, data);
  }
}
