import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
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
  @ViewChild('endOfChat')
  endOfChat!: ElementRef;

  messages$!: Observable<IMessage[]>;
  user$=this.authService.currentUser$;

  editMessage!: IMessage

  constructor(
    private chatService:ChatService,
    private authService:AuthenticationService
  ) {
  }
  ngOnInit(): void {
    this.chatService.setChat('I9gQ6gfCTBC5qeIIzejL')

    this.chatService.currentChat$.subscribe(()=> {
        this.messages$ = this.chatService.chatMessages$.pipe(
          tap(() => {
            this.scrollToBottom()
          }));
      });
  }

  scrollToBottom(){
    setTimeout(() => {
      if (this.endOfChat) {
        this.endOfChat.nativeElement.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  }
}
