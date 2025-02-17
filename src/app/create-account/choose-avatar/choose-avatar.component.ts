import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-choose-avatar',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './choose-avatar.component.html',
  styleUrl: './choose-avatar.component.scss'
})
export class ChooseAvatarComponent {
  isArrowbackHovered: boolean = false;
  selectedAvatar: string = '/img/landingPage/1.avatare/profile.svg'; // Standardavatar

  @Input({ required: true }) userName: string = '';
  @Input({ required: true }) email: string = '';
  @Input({ required: true }) password: string = '';

  constructor(private authService: AuthService) {}

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
      alert('Bitte wähle einen Avatar!');
      return;
    }

    try {
      const user = await this.authService.registerUser(
        this.userName, 
        this.email, 
        this.password, 
        this.selectedAvatar
      );
      alert('Registrierung erfolgreich!');
      console.log('Erstellter Benutzer:', user);
    } catch (error) {
      alert('Fehler bei der Registrierung!');
      console.error(error);
    }
  }
}
