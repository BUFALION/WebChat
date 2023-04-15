import { Injectable } from '@angular/core';
import {collection, collectionData, Firestore, query} from "@angular/fire/firestore";
import {Observable} from "rxjs";
import {IMessage} from "../models/chat";

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor(
    private firestore:Firestore

  ) { }


  get chatMessages$():Observable<IMessage[]>{
    const ref= collection(this.firestore,'messages');
    return collectionData(query(ref)) as Observable<IMessage[]>;
  }


}
