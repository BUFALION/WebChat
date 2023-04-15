import { Injectable } from '@angular/core';
import {Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword} from "@angular/fire/auth";
import {from} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
   constructor(private auth: Auth) { }

   login(username:string, password:string){
     return from(signInWithEmailAndPassword(this.auth,username,password));
   }
}
