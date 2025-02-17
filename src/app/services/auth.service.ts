import { Injectable } from '@angular/core';
import { Firestore, doc, setDoc } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private firestore: Firestore) {}

  async registerUser(name: string, email: string, password: string, avatar: string) {
    try {
      // 🔹 Speichert die Anmeldedaten direkt in Firestore
      const userRef = doc(this.firestore, 'LogIn/vDqQdCYcO1BYnFqzIq1m'); 
      await setDoc(userRef, { name, email, password, avatar });

      console.log('Daten erfolgreich gespeichert!');
    } catch (error) {
      console.error('Fehler beim Speichern:', error);
      throw error;
    }
  }
}
