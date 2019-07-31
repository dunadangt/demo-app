import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthStateService {

  isLoggedIn: boolean;
  userId: string;
  constructor() {
    this.isLoggedIn = false;
   }

  signIn(userId: string) {
    this.userId = userId;
    this.isLoggedIn = true;
  }

  signOut() {
    this.userId = undefined;
    this.isLoggedIn = false;
  }
}
