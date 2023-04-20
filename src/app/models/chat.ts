export interface IChat{
  id:string
  userIds:string[]
}
export interface IMessage{
  id:string;
  text:string;
  senderId:string;
  sentDate: Date;
}
