import { AfterViewInit, ChangeDetectorRef, Component, inject, ViewChild } from '@angular/core';
import { MatSidenav, MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-devspace',
  standalone: true,
  imports: [MatSidenavModule, MatButtonModule],
  templateUrl: './devspace.component.html',
  styleUrl: './devspace.component.scss'
})
export class DevspaceComponent implements AfterViewInit {

  private _formBuilder = inject(FormBuilder);
  private cdr = inject(ChangeDetectorRef);

  @ViewChild('sidenav') sidenav!: MatSidenav;
  hover = false;

  options = this._formBuilder.group({
    bottom: 0,
    fixed: false,
    top: 0,
  });

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

}
