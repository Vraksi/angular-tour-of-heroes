import { Injectable } from '@angular/core';
import { clear } from 'console';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  messages: string[] = [];

  constructor() { }

  add(message: string) {
    this.messages.push(message);
  }
  
  clear(){
    this.messages = [];
  }
}


