import { Component } from '@angular/core';
import { FooterComponent } from "../shared/footer/footer.component";
import { HeaderLogoComponent } from "../shared/header-logo/header-logo.component";
import { RouterModule } from '@angular/router';
import { ChooseAvatarComponent } from "./choose-avatar/choose-avatar.component";
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-create-account',
  standalone: true,
  imports: [FooterComponent, HeaderLogoComponent, RouterModule, ChooseAvatarComponent, FormsModule, CommonModule],
  templateUrl: './create-account.component.html',
  styleUrl: './create-account.component.scss'
})
export class CreateAccountComponent {

  isCheckboxHovered: boolean = false;
  isCheckboxChecked: boolean = false;
  isArrowbackHovered: boolean = false;

  // swenn ich mit choose-avatar fertig bin soll isLoginDataRight: boolean = false; und isCreateAccountNotFinished: boolean = true;

  isLoginDataRight: boolean = true;
  isCreateAccountNotFinished: boolean = false;

  name: string = '';
  email: string = '';
  password: string = '';
  acceptedTerms: boolean = false;
  submitted = false;

  onSubmit() {
    if (this.name && this.email && this.password && this.acceptedTerms) {
      console.log('Anmeldeformular gesendet:', {
        name: this.name,
        email: this.email,
        password: this.password
      });
    } else {
      console.log('Bitte alle Felder korrekt ausfüllen.');
    }
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

  showAvatar(form: any, event: Event) {
    event.preventDefault(); // Verhindert das Standardverhalten des Buttons
    this.submitted = true; // ⚠️ WICHTIG: Setzt `submitted` sofort!
  
    if (form.invalid) {
      console.log("Fehler: Formular nicht korrekt ausgefüllt!");
      return; // Stoppt die Funktion, wenn das Formular ungültig ist
    }

    console.log("Formulardaten:", form.value);
    this.isCreateAccountNotFinished = false;
    this.isLoginDataRight = true;
  }
  
}
