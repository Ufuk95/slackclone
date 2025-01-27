import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Router } from '@angular/router'; 
// import { GoogleAuthProvider, signInWithRedirect, Auth } from '@angular/fire/auth';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss'
})
export class LandingPageComponent {
  focusedEmail = false;
  focusedPassword = false;

  // constructor(private router: Router, private afAuth: Auth) {}



  // googleLogin(){
  //   signInWithRedirect(this.afAuth, new GoogleAuthProvider());
  // }
}
