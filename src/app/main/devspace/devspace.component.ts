import { AfterViewInit, ChangeDetectorRef, Component, EventEmitter, inject, OnInit, Output, ViewChild } from '@angular/core';
import { MatSidenav, MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { FormBuilder } from '@angular/forms';
import { UserComponent } from './user/user.component';
import { ChannelComponent } from './channel/channel.component';
import { CommonModule } from '@angular/common';
import { Channel, ChannelService } from '../../services/channel.service';
import { User, UserService } from '../../services/users.service'
import { Observable } from 'rxjs';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-devspace',
  standalone: true,
  imports: [MatSidenavModule, MatButtonModule, UserComponent, ChannelComponent, CommonModule],
  templateUrl: './devspace.component.html',
  styleUrl: './devspace.component.scss'
})
export class DevspaceComponent implements AfterViewInit, OnInit {

  private _formBuilder = inject(FormBuilder);
  private cdr = inject(ChangeDetectorRef);

  @ViewChild('sidenav') sidenav!: MatSidenav;
  hover = false;

  isMessageIconHovered: boolean = false;
  isAddHovered: boolean = false
  isChannelHovered: boolean = false;
  isUserHovered: boolean = false;

  @Output() newChannelClicked: EventEmitter<boolean> = new EventEmitter();
  // @Output() userSelected: EventEmitter<string> = new EventEmitter<string>();
  @Output() channelSelected: EventEmitter<string> = new EventEmitter<string>();


  isNewChannelClicked: boolean = false;
  isUsersListVisible: boolean = true;
  isChannelsListVisible: boolean = true;


  channels$!: Observable<Channel[]>;
  users$!: Observable<User[]>;

  selectedUserId = "u1";
  selectedChannelName = "Entwicklerteam";

  options = this._formBuilder.group({
    bottom: 0,
    fixed: false,
    top: 0,
  });

  constructor(private channelService: ChannelService, private userService: UserService) {}

  ngOnInit() {
    this.channels$ = this.channelService.getChannels(); // Channels aus Firestore
    this.users$ = this.userService.getUsers(); // 🔥 Benutzer aus Firestore
  }

  ngAfterViewInit() {
    this.cdr.detectChanges(); // Erzwingt eine Aktualisierung nach der Initialisierung
  }                           // Problemlösung für Fehlermeldung auf der Konsole durch asynchronität von ViewChild

  get sidenavIcon(): string {
    if (this.sidenav?.opened) {
      return this.hover
        ? '/img/Devspace/workspace/workspace-default-hover.svg'
        : '/img/Devspace/workspace/workspace-default.svg';

    } else {
      return this.hover
        ? '/img/Devspace/workspace/workspace-nav-hover.svg'
        : '/img/Devspace/workspace/workspace-nav.svg';
    }
  }


  getUserImageSource(): string {
    if (!this.isUsersListVisible && this.isUserHovered) {
      return '/img/Devspace/arrow_drop_down_right_blue.svg'
    } else if (!this.isUsersListVisible) {
      return '/img/Devspace/arrow_drop_down_right.svg'
    } else if (this.isUsersListVisible && this.isUserHovered) {
      return '/img/Devspace/arrow_drop_down_blue.svg'
    } else {
      return '/img/Devspace/arrow_drop_down.svg';
    }
  }

  getChannelImageSource() {
    if (!this.isChannelsListVisible && this.isChannelHovered) {
      return '/img/Devspace/arrow_drop_down_right_blue.svg'
    } else if (!this.isChannelsListVisible) {
      return '/img/Devspace/arrow_drop_down_right.svg'
    } else if (this.isChannelsListVisible && this.isChannelHovered) {
      return '/img/Devspace/arrow_drop_down_blue.svg'
    } else {
      return '/img/Devspace/arrow_drop_down.svg';
    }
  }

  onSelectedChannel(name: string) {
    this.selectedChannelName = name;
    this.channelSelected.emit(name);
  }

  toggleUsersList() {
    this.isUsersListVisible = !this.isUsersListVisible;
  }

  toggleChannelsList() {
    this.isChannelsListVisible = !this.isChannelsListVisible;
  }

  onNewChannelClick() {
    this.isNewChannelClicked = true;
    this.newChannelClicked.emit(this.isNewChannelClicked);
  }

}
