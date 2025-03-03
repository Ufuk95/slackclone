import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

// import { GoogleAuthProvider, signInWithRedirect, Auth } from '@angular/fire/auth';



@Component({
  selector: 'app-log-in',
  standalone: true,
  imports: [RouterModule, FormsModule],
  templateUrl: './log-in.component.html',
  styleUrl: './log-in.component.scss'
})
export class LogInComponent {
  focusedEmail = false;
  focusedPassword = false;

  email: string = '';
  password: string = '';


  constructor(private router: Router, private authService: AuthService) { }

  async login() {
    try {
      console.log('📩 Eingegebene Daten:', { email: this.email, password: this.password });
      await this.authService.loginUser(this.email, this.password);
      console.log('Weiterleitung zur MainComponent...');
      this.router.navigate(['/main']); // 🚦 Navigation zur MainComponent
    } catch (error) {
      console.error('Anmeldung fehlgeschlagen!');
      alert('Anmeldung fehlgeschlagen! Bitte überprüfe deine Anmeldedaten.');
    }
  }



  // googleLogin(){
  //   signInWithRedirect(this.afAuth, new GoogleAuthProvider());
  // }
}
