import { Component } from '@angular/core';
import { DevspaceComponent } from "./devspace/devspace.component";

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [DevspaceComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {

}
