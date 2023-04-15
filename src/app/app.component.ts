import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {IMessage} from "./models/chat";
import {ChatService} from "./services/chat.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'chat';

  messages$!: Observable<IMessage[]>;

  constructor(
    private chatService:ChatService
  ) {
  }

  ngOnInit(): void {
    this.messages$=this.chatService.chatMessages$;

  }

}
