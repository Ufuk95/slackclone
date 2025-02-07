import { Component } from '@angular/core';
import { FooterComponent } from "../shared/footer/footer.component";
import { HeaderLogoComponent } from "../shared/header-logo/header-logo.component";
import { RouterModule } from '@angular/router';
import { ChooseAvatarComponent } from "./choose-avatar/choose-avatar.component";

@Component({
  selector: 'app-create-account',
  standalone: true,
  imports: [FooterComponent, HeaderLogoComponent, RouterModule, ChooseAvatarComponent],
  templateUrl: './create-account.component.html',
  styleUrl: './create-account.component.scss'
})
export class CreateAccountComponent {

  isCheckboxHovered: boolean = false;
  isCheckboxChecked: boolean = false;
  isArrowbackHovered: boolean = false;
  isLoginDataRight: boolean = false;
  isCreateAccountNotFinished: boolean = true;

  onSubmit() {

  }

  get CheckboxImage(): string {
    if (this.isCheckboxChecked) {
      return this.isCheckboxHovered
        ? '/img/landingPage/2.kontoErstellen/hover_checked.svg'
        : '/img/landingPage/2.kontoErstellen/checked_box.svg';
    } else {
      return this.isCheckboxHovered
        ? '/img/landingPage/2.kontoErstellen/hover_empty_checkbox.svg'
        : '/img/landingPage/2.kontoErstellen/empty_checkbox.svg';
    }
  }

  toggleCheckbox(): void {
    this.isCheckboxChecked = !this.isCheckboxChecked;
  }

  get hoverArrowbackSrc(): string {
    if (this.isArrowbackHovered) {
      return '/img/landingPage/2.kontoErstellen/blue_arrow_back.svg';
    } else {
      return '/img/landingPage/2.kontoErstellen/arrow_back.svg'
    }
  }
}
