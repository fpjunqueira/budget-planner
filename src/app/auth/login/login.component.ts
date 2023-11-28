import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  loginForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
  });

  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
    private router: Router
  ) {}

  onSubmit() {
    const email = this.loginForm.value.email;
    const password = this.loginForm.value.password;
    this.auth.login(email, password).subscribe({
      next: (user) => {
        console.log('User logged in', user.firstname);
        this.router.navigateByUrl('/');
      },
      error: () => alert('You are not registered!'),
    });
  }

  loginWithGoogle() {
    throw new Error('Method not implemented.');
  }
  register() {
    this.router.navigateByUrl('auth/register');
  }
}
