import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Router } from '@angular/router';
// import { GoogleAuthProvider, signInWithRedirect, Auth } from '@angular/fire/auth';



@Component({
  selector: 'app-log-in',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './log-in.component.html',
  styleUrl: './log-in.component.scss'
})
export class LogInComponent {
  focusedEmail = false;
  focusedPassword = false;

  // constructor(private router: Router, private afAuth: Auth) {}



  // googleLogin(){
  //   signInWithRedirect(this.afAuth, new GoogleAuthProvider());
  // }
}
