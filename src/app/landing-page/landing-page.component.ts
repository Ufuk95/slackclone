import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Router } from '@angular/router';
import { HeaderComponent } from "../shared/header/header.component";
import { LogInComponent } from "./log-in/log-in.component";
import { FooterComponent } from "../shared/footer/footer.component";
import { IntroAnimationComponent } from "../intro-animation/intro-animation.component";
// import { GoogleAuthProvider, signInWithRedirect, Auth } from '@angular/fire/auth';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [HeaderComponent, LogInComponent, FooterComponent, CommonModule],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss'
})
export class LandingPageComponent {

}
