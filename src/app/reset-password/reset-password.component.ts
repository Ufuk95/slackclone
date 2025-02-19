import { Component } from '@angular/core';
import { HeaderLogoComponent } from "../shared/header-logo/header-logo.component";
import { FooterComponent } from "../shared/footer/footer.component";
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-reset-password',
  standalone: true,
  imports: [HeaderLogoComponent, FooterComponent, FormsModule, CommonModule, RouterModule],
  templateUrl: './reset-password.component.html',
  styleUrl: './reset-password.component.scss'
})
export class ResetPasswordComponent {

  isArrowbackHovered: boolean = false;


  get hoverArrowbackSrc(): string {
    if (this.isArrowbackHovered) {
      return '/img/landingPage/2.kontoErstellen/blue_arrow_back.svg';
    } else {
      return '/img/landingPage/2.kontoErstellen/arrow_back.svg'
    }
  }
}
