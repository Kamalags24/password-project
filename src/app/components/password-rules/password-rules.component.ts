import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-password-rules',
  templateUrl: './password-rules.component.html',
  styleUrl: './password-rules.component.css'
})
export class PasswordRulesComponent {
  @Input() password: string = '';

  get isLengthValid(): boolean {
    return this.password.length >= 8;
  }

  get hasUpperCase(): boolean {
    return /[A-Z]/.test(this.password);
  }

  get hasNumber(): boolean {
    return /\d/.test(this.password);
  }

  // Ajoutez d'autres règles selon vos besoins
}

