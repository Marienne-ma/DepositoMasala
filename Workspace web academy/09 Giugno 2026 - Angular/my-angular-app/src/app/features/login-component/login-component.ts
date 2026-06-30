import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-component',
  imports: [ReactiveFormsModule],
  templateUrl: './login-component.html',
  styleUrl: './login-component.css',
})
export class LoginComponent {

  loginForm = new FormGroup({
  username: new FormControl('', Validators.required),
  password: new FormControl('', [
    Validators.required,
    Validators.minLength(6)
  ])
});

onLogin(): void {
  if(!this.loginForm.valid){
    return;
  }
}

}
