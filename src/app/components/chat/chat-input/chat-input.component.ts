import {Component, OnInit} from '@angular/core';
import {FormControl,  Validators} from "@angular/forms";
import {map, switchMap} from "rxjs";

@Component({
  selector: 'app-chat-input',
  templateUrl: './chat-input.component.html',
  styleUrls: ['./chat-input.component.css']
})
export class ChatInputComponent implements OnInit{
  messageControl!: FormControl

  //Add ChatSerivce

  ngOnInit(): void {
    this.messageControl=new FormControl('',[Validators.required])
  }
  sendMessage():void {
    //ChatService sendMessage();
    this.messageControl.reset()

  }

}
