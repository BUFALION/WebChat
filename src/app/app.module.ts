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
import { provideAuth,getAuth} from "@angular/fire/auth";
import {ChatComponent} from "./components/chat/chat.component";
import { DateShowPipe } from './pipes/date-show.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatMenuModule} from "@angular/material/menu";


@NgModule({
  declarations: [
    AppComponent,
    ChatHeaderComponent,
    ChatInputComponent,
    ChatMessageComponent,
    LoginComponent,
    SignUpComponent,
    ChatComponent,
    DateShowPipe

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
        BrowserAnimationsModule,
        MatMenuModule,

    ],
  providers: [],
  exports: [
    ChatMessageComponent,
    ChatHeaderComponent,
    ChatInputComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
