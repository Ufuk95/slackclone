import { Component } from '@angular/core';
import { DevspaceComponent } from "./devspace/devspace.component";
import { ALL_CHANNELS } from '../shared/ALL_CHANNELS';
import { ALL_USERS } from '../shared/ALL_USERS';
import { NewChannelComponent } from "./new-channel/new-channel.component";
import { ChatHeaderComponent } from "./chat-header/chat-header.component";

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [DevspaceComponent, NewChannelComponent, ChatHeaderComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {
  isNewChannelClicked: boolean = false;
  showUsers: boolean = false;
  showChannels: boolean = true;

  channels = ALL_CHANNELS;
  users = ALL_USERS;

  selectedUserId = "u1";
  selectedChannelName = "Entwicklerteam";

  get selectedUser() {
    return this.users.find((user) => user.id === this.selectedUserId)!;
  }

  get selectedChannel() {
    return this.channels.find((channel) => channel.name === this.selectedChannelName)!;
  }

  handleNewChannelClicked(event: boolean) {
    this.isNewChannelClicked = event;
    
  }

  handleNewChannelClosed() {
    this.isNewChannelClicked = false;
  }

  handleUserSelected(id: string) {
    this.selectedUserId = id;
    this.showChannels = false;
    this.showUsers = true;
  }

  hanldeChannelSelected(name: string) {
    this.selectedChannelName = name;
    this.showChannels = true;
    this.showUsers = false;
  }
}
