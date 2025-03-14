import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-channel',
  standalone: true,
  imports: [],
  templateUrl: './channel.component.html',
  styleUrl: './channel.component.scss'
})
export class ChannelComponent {

  @Input({ required: true }) name!: string;
  @Output() selectChannel = new EventEmitter();


  onSelectChannel() {
    this.selectChannel.emit(this.name);
  }
}
