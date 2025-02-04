import { Component } from '@angular/core';
import { FooterComponent } from "../shared/footer/footer.component";
import { HeaderLogoComponent } from "../shared/header-logo/header-logo.component";
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-create-account',
  standalone: true,
  imports: [FooterComponent, HeaderLogoComponent, RouterModule],
  templateUrl: './create-account.component.html',
  styleUrl: './create-account.component.scss'
})
export class CreateAccountComponent {


  onSubmit() {
    
  }
}
