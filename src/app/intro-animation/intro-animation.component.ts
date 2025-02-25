import { Component } from '@angular/core';
import { trigger, style, transition, animate } from '@angular/animations';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-intro-animation',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './intro-animation.component.html',
  styleUrl: './intro-animation.component.scss',
  animations: [
    trigger('slideInAnimation', [
      transition(':enter', [
        style({ transform: 'translateX(-100%)', opacity: 0 }),
        animate('0.8s 0.8s ease-out', style({ transform: 'translateX(0)', opacity: 1 }))
      ])
    ]),
  ]
})
export class IntroAnimationComponent {

  constructor(private router: Router) {}

  animationDone() {
    console.log('Animation abgeschlossen, navigiere zur LandingPage');
    setTimeout(() => {
      this.router.navigate(['/landingPage']);
    }, 900)

  }

}
