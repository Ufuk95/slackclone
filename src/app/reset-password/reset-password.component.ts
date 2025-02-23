import { Component } from '@angular/core';
import { HeaderLogoComponent } from "../shared/header-logo/header-logo.component";
import { FooterComponent } from "../shared/footer/footer.component";
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-reset-password',
  standalone: true,
  imports: [HeaderLogoComponent, FooterComponent, FormsModule, CommonModule, RouterModule],
  templateUrl: './reset-password.component.html',
  styleUrl: './reset-password.component.scss'
})
export class ResetPasswordComponent {

  isArrowbackHovered: boolean = false;
  isEmailSendSuccessful: boolean = false;

  email: string = '';

  constructor(private authService: AuthService) { }

  get hoverArrowbackSrc(): string {
    if (this.isArrowbackHovered) {
      return '/img/landingPage/2.kontoErstellen/blue_arrow_back.svg';
    } else {
      return '/img/landingPage/2.kontoErstellen/arrow_back.svg'
    }
  }

  async sendEmail() {
    try {
      const emailExists = await this.authService.checkIfEmailExists(this.email);

      if (emailExists) {
        console.log('E-Mail existiert! Sende Passwort-Reset-Link.');
        try {
          await this.authService.sendPasswordReset(this.email);
          console.log('E-Mail zum Zurücksetzen des Passworts gesendet!');
          this.isEmailSendSuccessful = true;
          setTimeout(() => {
            this.isEmailSendSuccessful = false;
          }, 2000);

        } catch (error) {
          console.error('Fehler bei der E-Mail-Überprüfung:', error);
        }
      } else {
        console.log('Diese E-Mail-Adresse ist nicht registriert.');
      }

    } catch (error) {
      console.error('Fehler bei der E-Mail-Überprüfung:', error);
    }
  }
}
