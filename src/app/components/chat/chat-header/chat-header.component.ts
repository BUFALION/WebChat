import {Component, OnInit} from '@angular/core';
import {ChatService} from "../../../services/chat.service";


@Component({
  selector: 'app-chat-header',
  templateUrl: './chat-header.component.html',
  styleUrls: ['./chat-header.component.css']
})
export class ChatHeaderComponent implements OnInit{
  chatName!:string

  constructor(private chatService:ChatService) {
  }

  ngOnInit(): void {
    this.chatService.currentChat$.subscribe(chat=>this.chatName=chat.chatName)
  }


}
