import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { appConfig } from './app/app.config'; // Deine bestehende App-Konfiguration
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { provideAnimations } from '@angular/platform-browser/animations'; // 👈 Animations-Provider importieren

const firebaseConfig = {
  apiKey: "AIzaSyBM-5hGzEZ0GmZup3L4njYEmobEasyNJfA",
  authDomain: "dabubble-ce86c.firebaseapp.com",
  projectId: "dabubble-ce86c",
  storageBucket: "dabubble-ce86c.firebasestorage.app",
  messagingSenderId: "513130048562",
  appId: "1:513130048562:web:54dbfb4a9dde81cb29a02b"
};

bootstrapApplication(AppComponent, {
  ...appConfig, // Behalte deine bestehende App-Konfiguration
  providers: [
    ...appConfig.providers, // Behalte vorhandene Provider aus appConfig
    provideAnimations(), // ✨ Animations-Provider hinzufügen
    provideFirebaseApp(() => initializeApp(firebaseConfig)),
    provideAuth(() => getAuth()), // 🔥 Auth-Provider hinzufügen
    provideFirestore(() => getFirestore()) // 🟢 Firestore-Provider hinzufügen
  ]
}).catch((err) => console.error(err));

