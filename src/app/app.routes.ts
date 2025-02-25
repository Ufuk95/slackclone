import { Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { NewPasswortComponent } from './new-passwort/new-passwort.component';
import { IntroAnimationComponent } from './intro-animation/intro-animation.component';

export const routes: Routes = [
    {path: "", component: IntroAnimationComponent},
    {path: "landingPage", component: LandingPageComponent},
    {path: "createAccount", component: CreateAccountComponent},
    {path: "resetPassword", component: ResetPasswordComponent},
    {path: "newPasswort", component: NewPasswortComponent}
];
