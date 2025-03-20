import { Component } from '@angular/core';
import { DevspaceComponent } from "./devspace/devspace.component";
import { NewChannelComponent } from "./new-channel/new-channel.component";
import { ChatHeaderComponent } from "./chat-header/chat-header.component";
import { ProfileMenuComponent } from "./profile-menu/profile-menu.component";

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [DevspaceComponent, NewChannelComponent, ChatHeaderComponent, ProfileMenuComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {

  isNewChannelClicked: boolean = false;

  isProfileMenuVisible = false; // für app-profile-menu

  toggleProfileMenu() {
    this.isProfileMenuVisible = !this.isProfileMenuVisible;
  }
  closeMenu() {
    this.isProfileMenuVisible = !this.isProfileMenuVisible;
  }

  handleNewChannelClicked(event: boolean) {
    this.isNewChannelClicked = event;
    
  }

  handleNewChannelClosed() {
    this.isNewChannelClicked = false;
  }


}
