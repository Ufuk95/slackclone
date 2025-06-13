import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector: 'app-chat-header',
    imports: [],
    templateUrl: './chat-header.component.html',
    styleUrl: './chat-header.component.scss'
})
export class ChatHeaderComponent {

  arrowImage: string = '/img/main/header/keyboard_arrow_down.svg';


  @Output() profileMenuToggle = new EventEmitter<void>();

  @Input() userName: string = 'Gast';
  @Input() userAvatar: string = '/img/landingPage/1.avatare/profile.svg';

  changeImage(isHovered: boolean) {
    this.arrowImage = isHovered
      ? '/img/main/header/blue_arrow_down.svg'
      : '/img/main/header/keyboard_arrow_down.svg';
  }

  toggleProfileMenu() {
    this.profileMenuToggle.emit();
  }
}
