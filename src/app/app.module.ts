import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ChatHeaderComponent } from './components/chat/chat-header/chat-header.component';
import { ChatInputComponent } from './components/chat/chat-input/chat-input.component';
import { ChatMessageComponent } from './components/chat/chat-message/chat-message.component';
import {NgOptimizedImage} from "@angular/common";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { LoginComponent } from './components/login/login.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import {RouterOutlet} from "@angular/router";
import {AppRoutingModule} from "./app-routing.module";
import {Auth, provideAuth,getAuth} from "@angular/fire/auth";

@NgModule({
  declarations: [
    AppComponent,
    ChatHeaderComponent,
    ChatInputComponent,
    ChatMessageComponent,
    LoginComponent,
    SignUpComponent,
  ],
  imports: [
    BrowserModule,
    NgOptimizedImage,
    FormsModule,
    ReactiveFormsModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore()),
    provideAuth(() => getAuth()),
    RouterOutlet,
    AppRoutingModule,



  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
