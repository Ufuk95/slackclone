import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Router } from '@angular/router';
import { HeaderComponent } from "../shared/header/header.component";
import { LogInComponent } from "./log-in/log-in.component";
import { FooterComponent } from "../shared/footer/footer.component";
import { CreateAccountComponent } from "./create-account/create-account.component"; 
// import { GoogleAuthProvider, signInWithRedirect, Auth } from '@angular/fire/auth';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [HeaderComponent, LogInComponent, FooterComponent, CreateAccountComponent],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss'
})
export class LandingPageComponent {
  isLogInVisible: boolean = true;
  isCreateAccountVisible: boolean = false;


  onCreateAccount() {
    this.isLogInVisible = false;
    this.isCreateAccountVisible = true;
  }
}
