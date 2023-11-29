import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { passwordMustMatch } from './password.validator';
import { AuthService } from '../auth.service';
import { User } from '../user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  registerForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
  ) {
    this.registerForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required],
    });

    this.registerForm.setValidators(
      passwordMustMatch('password', 'confirmPassword')
    );
  }

  onSubmit() {
    const userForm = this.registerForm.value as User;
    this.auth.register(userForm).subscribe({
      next: () => {
        alert('User Successfully Registered!');
      },
      error: (err) => alert(err),
    });
  }
}
