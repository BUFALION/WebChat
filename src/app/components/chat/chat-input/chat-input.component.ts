import {Component, OnInit} from '@angular/core';
import {FormControl,  Validators} from "@angular/forms";
import {map, switchMap} from "rxjs";
import {ChatService} from "../../../services/chat.service";

@Component({
  selector: 'app-chat-input',
  templateUrl: './chat-input.component.html',
  styleUrls: ['./chat-input.component.css']
})
export class ChatInputComponent implements OnInit{
  messageControl!: FormControl

  chatId!:string;

  constructor(private chatService:ChatService) {
  }

  ngOnInit(): void {
    this.messageControl=new FormControl('',[Validators.required])

    this.chatService.currentChat$.subscribe(chat => this.chatId=chat.id)
  }
  sendMessage():void {
    if(this.chatService.currentChat$) {
      this.chatService.addChatMessage(this.messageControl.value,this.chatId)
      this.messageControl.setValue('')
    }

  }

}
