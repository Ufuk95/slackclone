import { CommonModule } from '@angular/common';
import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { UserComponent } from '../devspace/user/user.component';
import { FormsModule, NgForm } from '@angular/forms';
import { ALL_CHANNELS } from '../../shared/ALL_CHANNELS';
import { ALL_USERS } from '../../shared/ALL_USERS';

@Component({
    selector: 'app-new-channel',
    imports: [CommonModule, UserComponent, FormsModule],
    templateUrl: './new-channel.component.html',
    styleUrl: './new-channel.component.scss'
})
export class NewChannelComponent implements OnInit, OnDestroy {

  isCloseHovered: boolean = false;
  showSecondDiv: boolean = false;
  showUserOnInputField: boolean = false;
  dynamicColor: string = "rgba(83, 90, 241, 1";
  selectedImage: string = 'blueSpace';
  users = ALL_USERS;
  filteredUsers = ALL_USERS;  // Gefilterte Benutzer (zu Beginn alle)

  channels = ALL_CHANNELS;

  channelName: string = '';
  channelUser: string = '';
  channelDescription: string = '';

  // Variable für den ausgewählten Benutzernamen
  selectedUserNames: string[] = [];  // Array der ausgewählten Benutzernamen
  selectedUserName: string = '';  // Einzelner ausgewählter Benutzername
  searchTerm: string = '';  // Eingabetext für die Filterung

  isInputUserHovered: boolean = false

  ngOnInit() {
    // Event-Listener für Klicks im gesamten Dokument hinzufügen
    document.addEventListener('click', this.hideUserList.bind(this));
  }

  ngOnDestroy() {
    // Event-Listener entfernen, wenn die Komponente zerstört wird
    document.removeEventListener('click', this.hideUserList.bind(this));
  }

  hideUserList(event: MouseEvent) {
    const target = event.target as HTMLElement;
    const isInput = target.closest('.userNameInput');
    const isUserList = target.closest('.userNames');

    if (!isInput && !isUserList) {
      this.showUserOnInputField = false;
    }
  }

  showImage(image: string) {
    this.selectedImage = image;
  }

  showUser() {
    this.showUserOnInputField = true;
  }

  @Output() closeChannelEvent = new EventEmitter<void>();

  closeChannel() {
    this.closeChannelEvent.emit();
    this.showSecondDiv = false;
  }

  newChannel(channelForm: NgForm) {
    if (channelForm.valid) {
      // Wenn das Formular gültig ist
      console.log('Channel wurde erstellt:', this.channelName, this.channelDescription);
      this.showSecondDiv = true;
    } else {
      // Wenn das Formular ungültig ist
      console.log('Formular ist ungültig. Überprüfe die Eingaben.');

      // Alle Felder als "touched" markieren, damit die Fehlermeldungen angezeigt werden
      Object.keys(channelForm.controls).forEach(field => {
        const control = channelForm.controls[field];
        control.markAsTouched({ onlySelf: true });
      });
    }
  }

  finalizeChannelCreation() {
    // Channel zur Liste hinzufügen, wenn ein Name definiert ist
    if (this.channelName.trim()) {
      this.channels.push({ name: this.channelName, description: this.channelDescription, user: this.channelUser});
      console.log('Channel wurde zur Liste hinzugefügt:', this.channelName);

      // Formular zurücksetzen und Ansicht schließen
      this.channelName = '';
      this.channelDescription = '';
      this.channelUser = '';
      this.closeChannel();
    } else {
      console.log('Channel-Name fehlt.');
    }
  }



  // Benutzer auswählen (Funktion wird von app-user aufgerufen)
  onSelectedUser(userName: string) {
    if (!this.selectedUserNames.includes(userName)) {
      // Benutzername zur Liste hinzufügen
      this.selectedUserNames.push(userName);
      // Input-Feld wird aktualisiert, damit weitere Namen hinzugefügt werden können
      this.searchTerm = ''; // Reset der Suchleiste
      this.showUserOnInputField = false;
    }
  }

  removeUser(index: number) {
    this.selectedUserNames.splice(index, 1); // Entferne den Benutzer aus der Liste
    this.selectedUserName = this.selectedUserNames.join(', '); // Die Namen werden mit Komma getrennt neu zusammengesetzt
  }


  // Fügt einen Benutzer hinzu, wenn Enter gedrückt wird
  onAddUser() {
    if (this.selectedUserName && !this.selectedUserNames.includes(this.selectedUserName)) {
      this.selectedUserNames.push(this.selectedUserName);
      this.selectedUserName = '';  // Setzt das Eingabefeld zurück
    }
  }

  // Filterlogik: Filtert Benutzer basierend auf dem eingegebenen Text
  filterUsers() {
    this.filteredUsers = this.users.filter(user => user.name.toLowerCase().includes(this.searchTerm.toLowerCase()));
  }
}
