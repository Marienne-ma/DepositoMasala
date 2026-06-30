import { Component, inject } from '@angular/core';
import { Auth2Service } from '../../../core/services/auth2-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login2-page-component',
  imports: [],
  templateUrl: './login2-page-component.html',
  styleUrl: './login2-page-component.css',
})
export class Login2PageComponent {

authService: Auth2Service = inject(Auth2Service);

  router: Router = inject(Router)


  loginGuard():void {

    this.authService.login();

    this.router.navigateByUrl("/home2")

  }

}
