import {Timestamp} from "@angular/fire/firestore";

export interface IChat{
  chatName:string
  id:string
  userIds:string[]
}
export interface IMessage{
  id:string;
  text:string;
  senderId:string;
  sentDate: Timestamp;
}
