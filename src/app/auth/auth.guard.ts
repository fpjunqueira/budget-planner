import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from './auth.service';
import { tap } from 'rxjs';

export const authGuard: CanActivateFn = () => {
  const router = inject(Router);
  const auth = inject(AuthService);
  return auth.authenticated().pipe(
    tap((authenticated) => {
      if (!authenticated) {
        router.navigateByUrl('/auth/login');
      }
    })
  );
};
