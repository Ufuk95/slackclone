import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-choose-avatar',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './choose-avatar.component.html',
  styleUrl: './choose-avatar.component.scss'
})
export class ChooseAvatarComponent {
  isArrowbackHovered: boolean = false;


  @Input({required: true}) userName: string = '';


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
}
