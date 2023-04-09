import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ChatHeaderComponent } from './components/chat-header/chat-header.component';
import { ChatInputComponent } from './components/chat-input/chat-input.component';
import { ChatMessageComponent } from './components/chat-message/chat-message.component';
import {NgOptimizedImage} from "@angular/common";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    ChatHeaderComponent,
    ChatInputComponent,
    ChatMessageComponent
  ],
  imports: [
    BrowserModule,
    NgOptimizedImage,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
