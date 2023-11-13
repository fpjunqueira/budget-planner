import { FormGroup, ValidationErrors } from '@angular/forms';

export function passwordMustMatch(
  passwordField: string,
  confirmPasswordField: string
) {
  return (formGroup: FormGroup): ValidationErrors | null => {
    const passwordControl = formGroup.controls[passwordField];
    const confirmPasswordControl = formGroup.controls[confirmPasswordField];

    if (
      confirmPasswordControl.errors &&
      !confirmPasswordControl.errors['mustMatch']
    ) {
      return null;
    }

    if (passwordControl.value !== confirmPasswordControl.value) {
      confirmPasswordControl.setErrors({ mustMatch: true });
      return { mustMatch: true };
    } else {
      confirmPasswordControl.setErrors(null);
      return null;
    }
  };
}
