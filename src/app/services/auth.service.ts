import { Injectable } from '@angular/core';
import { Firestore, collection, addDoc, query, where, getDocs } from '@angular/fire/firestore';
import { Auth, createUserWithEmailAndPassword, sendPasswordResetEmail, signInWithEmailAndPassword, User } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private firestore: Firestore, private auth: Auth) { }

  async registerUser(name: string, email: string, password: string, avatar: string) {
    try {
      // 🔒 Benutzer in Firebase Authentication erstellen
      const userCredential = await createUserWithEmailAndPassword(this.auth, email, password);
      console.log('Benutzer erfolgreich erstellt:', userCredential);

      const user: User = userCredential.user;
      console.log('Firebase UID:', user.uid);

      // 📂 Zusätzliche Benutzerinformationen in Firestore speichern
      const userRef = collection(this.firestore, 'LogIn');
      await addDoc(userRef, {
        uid: user.uid,
        name,
        email,
        avatar
      });
      console.log('Benutzer erfolgreich in Firestore registriert!');
    } catch (error) {
      console.error('Fehler bei der Registrierung:', error);
      alert('Registrierung fehlgeschlagen: ' + error);
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


  async loginUser(email: string, password: string): Promise<void> {
    try {
        // 🛠 Email bereinigen
        email = email.trim().toLowerCase();

        console.log('🔍 Login-Daten nach Bereinigung:', { email, password });

        if (!email || !password) {
            console.error('❌ Fehler: Email oder Passwort fehlt!');
            alert('Bitte E-Mail und Passwort eingeben.');
            return;
        }

        const userCredential = await signInWithEmailAndPassword(this.auth, email, password);
        console.log('✅ Anmeldung erfolgreich:', userCredential.user);
    } catch (error) {
        console.error('❌ Fehler bei der Anmeldung:', error);
        alert('Anmeldung fehlgeschlagen: ' + error);
        throw error;
    }
}





}
