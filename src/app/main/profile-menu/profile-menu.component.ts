import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-profile-menu',
  standalone: true,
  imports: [],
  templateUrl: './profile-menu.component.html',
  styleUrl: './profile-menu.component.scss'
})
export class ProfileMenuComponent {

  @Output() closeProfileMenu = new EventEmitter();


  closeMenu() {
    this.closeProfileMenu.emit()
  }

}
