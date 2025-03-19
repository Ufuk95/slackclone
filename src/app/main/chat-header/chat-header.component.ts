import { Component } from '@angular/core';

@Component({
  selector: 'app-chat-header',
  standalone: true,
  imports: [],
  templateUrl: './chat-header.component.html',
  styleUrl: './chat-header.component.scss'
})
export class ChatHeaderComponent {

  arrowImage: string = '/img/main/header/keyboard_arrow_down.svg';
  isUserInformationClicked: boolean = false;

  changeImage(isHovered: boolean) {
    this.arrowImage = isHovered
      ? '/img/main/header/blue_arrow_down.svg'
      : '/img/main/header/keyboard_arrow_down.svg';
  }

  showUserInformation() {
    this.isUserInformationClicked = true;
  }
}
