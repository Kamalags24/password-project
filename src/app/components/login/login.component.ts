import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  isPasswordValid: boolean = false;
  passwordFieldType: string = 'password';


  checkPassword(): void {
    this.isPasswordValid = this.password.length >= 8 && /[A-Z]/.test(this.password) && /\d/.test(this.password);
  }

  onSubmit(): void {
    if (this.isPasswordValid) {
      localStorage.setItem('username', this.username);
      localStorage.setItem('password', this.password);
      this.showSuccessAnimation();
    }
  }

  showSuccessAnimation(): void {
    // Implémentez votre animation ici
    alert("Mot de passe sauvegardé avec succès !");
  }

  togglePasswordVisibility(): void {
    this.passwordFieldType = this.passwordFieldType === 'password' ? 'text' : 'password';
  }

  generatePassword(): void {
    const length = 12;
    const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$!";
    let generatedPassword = "";
    for (let i = 0; i < length; i++) {
      generatedPassword += charset.charAt(Math.floor(Math.random() * charset.length));
    }
    this.password = generatedPassword;
    this.checkPassword();
  }

  get passwordStrength(): string {
    const length = this.password.length;
    const hasUpperCase = /[A-Z]/.test(this.password);
    const hasLowerCase = /[a-z]/.test(this.password);
    const hasNumber = /\d/.test(this.password);
    const hasSpecialChar = /[@#$!%*?&]/.test(this.password);

    if (length >= 12 && hasUpperCase && hasLowerCase && hasNumber && hasSpecialChar) {
      return 'fort';
    } else if (length >= 8 && (hasUpperCase || hasLowerCase) && (hasNumber || hasSpecialChar)) {
      return 'moyen';
    } else {
      return 'faible';
    }
  }
}
