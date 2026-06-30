
import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { Auth2Service } from '../services/auth2-service';

export const auth2Guard: CanActivateFn = (route, state) => {



  const authService = inject(Auth2Service)
  const router = inject(Router)


 return authService.isloggedIn() ? true : router.createUrlTree(["/login2"])


};
