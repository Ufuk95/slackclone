import { Injectable } from '@angular/core';
import { Firestore, collection, addDoc, query, where, getDocs } from '@angular/fire/firestore';
import { Auth, sendPasswordResetEmail } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private firestore: Firestore, private auth: Auth) {}

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

  async checkIfEmailExists(email: string): Promise<boolean> {
    try {
      const userRef = collection(this.firestore, 'LogIn');
      const q = query(userRef, where('email', '==', email));
      const querySnapshot = await getDocs(q);
      return !querySnapshot.empty;
    } catch (error) {
      console.error('Fehler bei der E-Mail-Überprüfung:', error);
      throw error;
    }
  }
  
  async sendPasswordReset(email: string): Promise<void> {
    try {
      await sendPasswordResetEmail(this.auth, email, {
        url: 'http://localhost:4200/new-passwort' // 🔗 Zielseite nach Reset
      });
      console.log('Passwort-Reset-E-Mail gesendet!');
    } catch (error) {
      console.error('Fehler beim Senden der E-Mail:', error);
      throw error;
    }
  }

}
