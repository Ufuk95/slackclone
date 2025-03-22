import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { RouterModule, Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

// import { GoogleAuthProvider, signInWithRedirect, Auth } from '@angular/fire/auth';



@Component({
    selector: 'app-log-in',
    standalone: true,
    imports: [RouterModule, FormsModule, CommonModule],
    templateUrl: './log-in.component.html',
    styleUrl: './log-in.component.scss'
})
export class LogInComponent {
    focusedEmail = false;
    focusedPassword = false;

    email: string = '';
    password: string = '';

    firebaseErrorMessage: string = '';


    constructor(private router: Router, private authService: AuthService) { }

    async login(form: NgForm) {
        if (form.invalid) {
            console.log("🛑 Formular ist ungültig!", form);
            this.markAllFieldsAsTouched(form);
            return;
        }
    
        try {
            console.log('📩 Eingegebene Daten:', { email: this.email, password: this.password });
            await this.authService.loginUser(this.email, this.password);
            this.router.navigate(['/main']);
        } catch (error: any) {
            console.error('Anmeldung fehlgeschlagen!', error);
            this.firebaseErrorMessage = error.message || 'Anmeldung fehlgeschlagen!';
            this.markAllFieldsAsTouched(form);
            form.control.updateValueAndValidity();
        }
        
    }
    
    // Diese Funktion setzt alle Felder als "berührt", damit die Fehlermeldungen erscheinen
    private markAllFieldsAsTouched(form: NgForm) {
        Object.values(form.controls).forEach(control => {
            control.markAsTouched();
            control.updateValueAndValidity();
        });
    }
    
    
    



    // googleLogin(){
    //   signInWithRedirect(this.afAuth, new GoogleAuthProvider());
    // }
}
