import { Injectable } from '@angular/core';
import { Firestore, collection, addDoc } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private firestore: Firestore) {}

  async registerUser(name: string, email: string, password: string, avatar: string) {
    try {
      // 🔹 Erstellt ein neues Dokument mit einer automatisch generierten ID in der LogIn-Collection
      const userRef = collection(this.firestore, 'LogIn');
      await addDoc(userRef, { name, email, password, avatar });

      console.log('Benutzer erfolgreich registriert!');
    } catch (error) {
      console.error('Fehler bei der Registrierung:', error);
      throw error;
    }
  }
}
