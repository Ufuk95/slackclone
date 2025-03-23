import { Injectable } from '@angular/core';
import { Firestore, collection, collectionData } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

export interface User {
  id: string;   // Die Dokument-ID aus Firestore
  name: string;
  avatar: string;
}

@Injectable({
  providedIn: 'root'
})
export class UserService {


  private usersCollection = collection(this.firestore, 'users');
  private userName: string = '';
  private userAvatar: string = '';

  constructor(private firestore: Firestore) {}

  getUsers(): Observable<User[]> {
    return collectionData(this.usersCollection, { idField: 'id' }) as Observable<User[]>;
  }


  setUserData(name: string, avatar: string) {
    this.userName = name;
    this.userAvatar = avatar;
  }

  getUserName(): string {
    return this.userName;
  }

  getUserAvatar(): string {
    return this.userAvatar;
  }
}
