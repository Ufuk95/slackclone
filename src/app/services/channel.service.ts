import { Injectable } from '@angular/core';
import { Firestore, collection, collectionData } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

export interface Channel {
  id?: string;
  name: string;
  description: string;
  users: string[];
}

@Injectable({
  providedIn: 'root'
})
export class ChannelService {
  private channelsCollection = collection(this.firestore, 'channels');

  constructor(private firestore: Firestore) {}

  getChannels(): Observable<Channel[]> {
    return collectionData(this.channelsCollection, { idField: 'id' }) as Observable<Channel[]>;
  }
}
