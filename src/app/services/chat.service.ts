import { Injectable } from '@angular/core';
import {
  addDoc,
  collection,
  collectionData, deleteDoc,
  doc,
  docData,
  Firestore,
  orderBy,
  query,
  Timestamp
} from "@angular/fire/firestore";
import {concatMap, map, Observable, of, switchMap, take,} from "rxjs";
import {IChat, IMessage} from "../models/chat";
import {AuthenticationService} from "./authentication.service";

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  currentChat$!:Observable<IChat>

  constructor(
    private firestore:Firestore,
    private authService:AuthenticationService
  ) {

  }
  get chatMessages$():Observable<IMessage[]>{
    //ЗАГЛУШКА, ИЗМЕНИТЬ
    if(!this.currentChat$)
      return of();

    return this.currentChat$.pipe(
      concatMap((chat)=>{
        const ref=collection(this.firestore,'chats',chat.id,'messages')
        //Нужен ли здесь query и можно ли использовать getDocs
        const querySort=query(ref,orderBy('sentDate', 'asc'))
        return collectionData(query(querySort),{idField:'id'}) as Observable<IMessage[]>;
      }),
    )
  }
  addChatMessage(message:string,id:string) {
    const ref = collection(this.firestore,'chats',id,'messages')
    this.authService.currentUser$.pipe(
      take(1),
        concatMap((user) =>
          addDoc(ref, {
            text: message,
            senderId: user?.uid,
            sentDate: Timestamp.fromDate(new Date()),
          })
      )).subscribe();
  }
  setChat(id:string){
    const docRef = doc(this.firestore, 'chats', id);
    this.currentChat$=docData(docRef,{ idField: 'id' }) as Observable<IChat>
  }
  deleteMessage(idMessage:string){
    this.currentChat$.pipe(
      switchMap((chat) => {
        const ref = doc(this.firestore, 'chats', chat.id, 'messages', idMessage);
        return deleteDoc(ref);
      }),
      take(1)
    ).subscribe();
  }

}
