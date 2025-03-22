import { Injectable } from '@angular/core';
import { Firestore, collection, addDoc, query, where, getDocs, collectionData } from '@angular/fire/firestore';
import { Auth, createUserWithEmailAndPassword, sendPasswordResetEmail, signInWithEmailAndPassword, User } from '@angular/fire/auth';
import { AuthErrorCodes } from 'firebase/auth';
import { Observable } from 'rxjs';

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
        email = email.trim().toLowerCase();
        console.log('🔍 Login-Daten nach Bereinigung:', { email, password });

        if (!email || !password) {
            console.error('❌ Fehler: Email oder Passwort fehlt!');
            throw new Error('Bitte E-Mail und Passwort eingeben.');
        }

        const userCredential = await signInWithEmailAndPassword(this.auth, email, password);
        console.log('✅ Anmeldung erfolgreich:', userCredential.user);
    } catch (error: any) {
        console.error('❌ Fehler bei der Anmeldung:', error);

        // 🔴 Firebase-Fehlermeldung umwandeln
        let errorMessage = 'Anmeldung fehlgeschlagen!';

        if (error.code === AuthErrorCodes.INVALID_PASSWORD) {
            errorMessage = 'Das Passwort ist ungültig.';
        } else if (error.code === AuthErrorCodes.USER_DELETED) {
            errorMessage = 'Es gibt kein Konto mit dieser E-Mail.';
        }

        throw new Error(errorMessage);
    }
}

}

