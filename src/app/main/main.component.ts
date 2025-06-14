import { Component } from '@angular/core';
import { DevspaceComponent } from "./devspace/devspace.component";
import { NewChannelComponent } from "./new-channel/new-channel.component";
import { ChatHeaderComponent } from "./chat-header/chat-header.component";
import { ProfileMenuComponent } from "./profile-menu/profile-menu.component";
import { UserService } from '../services/users.service';
import { ChatComponent } from "./chat/chat.component";

@Component({
    selector: 'app-main',
    imports: [DevspaceComponent, NewChannelComponent, ChatHeaderComponent, ProfileMenuComponent, ChatComponent],
    templateUrl: './main.component.html',
    styleUrl: './main.component.scss'
})
export class MainComponent {

  isNewChannelClicked: boolean = false;

  isProfileMenuVisible = false; // für app-profile-menu

  userName: string = '';
  userAvatar: string = '';

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userName = this.userService.getUserName();
    this.userAvatar = this.userService.getUserAvatar();
  }

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
