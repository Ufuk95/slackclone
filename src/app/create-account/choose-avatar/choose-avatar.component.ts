import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-choose-avatar',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './choose-avatar.component.html',
  styleUrl: './choose-avatar.component.scss'
})
export class ChooseAvatarComponent {
  isArrowbackHovered: boolean = false;
  selectedAvatar: string = '/img/landingPage/1.avatare/profile.svg';
  isRegistrationSuccessful: boolean = false;

  @Input({ required: true }) userName: string = '';
  @Input({ required: true }) email: string = '';
  @Input({ required: true }) password: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  get hoverArrowbackSrc(): string {
    if (this.isArrowbackHovered) {
      return '/img/landingPage/2.kontoErstellen/blue_arrow_back.svg';
    } else {
      return '/img/landingPage/2.kontoErstellen/arrow_back.svg'
    }
  }

  get avatarImages(): string[] {
    return Array.from({ length: 6 }, (_, i) => `/img/landingPage/1.avatare/${i + 1}.Foto.svg`);
  }

  selectAvatar(avatar: string): void {
    this.selectedAvatar = avatar; // Speichert das gewählte Avatar-Bild
  }



  async completeRegistration() {
    if (!this.selectedAvatar) {
        console.log('Bitte wähle einen Avatar!');
        return;
    }

    try {
        await this.authService.registerUser(
            this.userName, 
            this.email, 
            this.password, 
            this.selectedAvatar
        );
        console.log('Registrierung erfolgreich!');
        this.isRegistrationSuccessful = true;

        setTimeout(() => {
            this.router.navigate(['/landingPage']);
        }, 2000); 

    } catch (error) {
        console.error('Fehler bei der Registrierung!', error);
    }
}


  goBack() {
    // hier funktion für zurück
  }
}
