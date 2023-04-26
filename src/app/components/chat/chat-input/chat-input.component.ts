import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {FormControl,  Validators} from "@angular/forms";
import {ChatService} from "../../../services/chat.service";
import {faPen,faCircleCheck,faXmark} from "@fortawesome/free-solid-svg-icons"
import {IMessage} from "../../../models/chat";
@Component({
  selector: 'app-chat-input',
  templateUrl: './chat-input.component.html',
  styleUrls: ['./chat-input.component.css']
})
export class ChatInputComponent implements OnInit,OnChanges{
  @Input() messageToEdit!:IMessage

  messageControl!: FormControl
  chatId!:string;

  editMessageStatus=false;
  constructor(private chatService:ChatService) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['messageToEdit'].currentValue) {
      this.editMessageStatus = true;
      this.messageControl.setValue(this.messageToEdit.text);
    }
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
  closeEditMessage(){
    this.editMessageStatus=false;
    this.messageControl.setValue('')

  }
  editMessage(){
    //TODO ДОБАВИТЬ СВЯЗЬ МЕЖДУ CONTROL И messageToEdit.text
    this.messageToEdit.text=this.messageControl.value
    this.chatService.setChatMessage(this.messageToEdit,this.chatId)

    this.editMessageStatus=false;
  }


  protected readonly faPen = faPen;
  protected readonly faCircleCheck = faCircleCheck;
  protected readonly faXmark = faXmark;


}
