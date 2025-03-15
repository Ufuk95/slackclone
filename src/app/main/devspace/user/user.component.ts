import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent {

  @Input({ required: true }) name!: string;
  @Input({ required: true }) avatar!: string;
  @Output() select = new EventEmitter<void>();

  get imagePath() {
    return `/img/Devspace/avatar/${this.avatar}`;
  }

  onSelectUser() {
    this.select.emit(); // 🔥 Hier wird das Event ausgelöst
  }
}
