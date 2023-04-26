import {Component, OnInit} from '@angular/core';
import {Observable, tap} from "rxjs";
import {IMessage} from "../../models/chat";
import {ChatService} from "../../services/chat.service";
import {AuthenticationService} from "../../services/authentication.service";

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})

export class ChatComponent implements OnInit{
  messages$!: Observable<IMessage[]>;
  user$=this.authService.currentUser$;

  editMessage!: IMessage

  constructor(
    private chatService:ChatService,
    private authService:AuthenticationService
  ) {
  }
  ngOnInit(): void {
    this.chatService.setChat('IHsdQFOZAUVycMW7ozGG')

    this.chatService.currentChat$.subscribe(()=> {
        this.messages$ = this.chatService.chatMessages$.pipe(
          tap(() => {
            //TODO SCROLL
          }));
      });
  }
}
