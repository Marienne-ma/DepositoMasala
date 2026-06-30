import { Component, inject } from '@angular/core';
import { Auth2Service } from '../../../core/services/auth2-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home2-page-component',
  imports: [],
  templateUrl: './home2-page-component.html',
  styleUrl: './home2-page-component.css',
})
export class Home2PageComponent {
  authService: Auth2Service = inject(Auth2Service);

  router: Router = inject(Router)

  logoutGuard():void {
    this.authService.logout();
    this.router.navigateByUrl("/login2")


  }
}
