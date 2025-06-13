import { Component } from '@angular/core';
import { HeaderLogoComponent } from "../shared/header-logo/header-logo.component";
import { FooterComponent } from "../shared/footer/footer.component";

@Component({
    selector: 'app-new-passwort',
    imports: [HeaderLogoComponent, FooterComponent],
    templateUrl: './new-passwort.component.html',
    styleUrl: './new-passwort.component.scss'
})
export class NewPasswortComponent {

}
