import {Component, EventEmitter, Input, Output, ViewChild} from '@angular/core';
import {IMessage} from "../../../models/chat";

import {MatMenuTrigger} from "@angular/material/menu";
import {AuthenticationService} from "../../../services/authentication.service";
import {ChatService} from "../../../services/chat.service";
import {deleteDoc} from "@angular/fire/firestore";

@Component({
  selector: 'app-chat-message',
  templateUrl: './chat-message.component.html',
  styleUrls: ['./chat-message.component.css']
})
export class ChatMessageComponent {
  @Input() message!:IMessage;
  @Input() isReceived!:boolean;

  @Output() onEditMessage=new EventEmitter<IMessage>();

  @ViewChild(MatMenuTrigger, {static: true}) matMenuTrigger!: MatMenuTrigger;

  menuTopLeftPosition={x:'0',y:'0'}
  constructor(private chatService:ChatService) {
  }
  openMsgMenu(event: MouseEvent,value: IMessage){
    event.preventDefault()
    if(this.isReceived)
      return;

    this.menuTopLeftPosition.x = event.clientX + 'px';
    this.menuTopLeftPosition.y = event.clientY + 'px';

    this.matMenuTrigger.openMenu();

  }

  deleteMessage(){
    //TODO ДОБАВТЬ КОНЕТКСТ МЕНЮ УДАЛИТЬ ДА/НЕТ
    this.chatService.deleteMessage(this.message.id);
  }
}
