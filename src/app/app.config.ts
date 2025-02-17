import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getDatabase, provideDatabase } from '@angular/fire/database';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideFirebaseApp(() => initializeApp({"projectId":"dabubble-ce86c","appId":"1:513130048562:web:54dbfb4a9dde81cb29a02b","storageBucket":"dabubble-ce86c.firebasestorage.app","apiKey":"AIzaSyBM-5hGzEZ0GmZup3L4njYEmobEasyNJfA","authDomain":"dabubble-ce86c.firebaseapp.com","messagingSenderId":"513130048562"})), provideFirestore(() => getFirestore()), provideDatabase(() => getDatabase())]
};
