import { Component } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { AuthService } from './../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  clicked: boolean = false;
  loginForm: FormGroup = this.fb.group({
    username: [null, [Validators.required]],
    password: [null, [
      Validators.required,
      Validators.pattern(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/
    )]],
  });

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router) { }

  get formControls() { return this.loginForm.controls; }

  onSubmit(): void {
    if (
       this.loginForm.get('password')?.valid
    && this.loginForm.get('username')?.valid
    && this.loginForm.get('username')?.value.trim())
    {
      const formValue = this.loginForm.value;
      this.clicked = true;
      let loginCheck = this.authService.login(formValue);
      if (loginCheck.logged) {
        this.router.navigate(['']);
      } else {
        console.log(loginCheck.message);
      }
      console.log("data", formValue)
    }
  }

}
