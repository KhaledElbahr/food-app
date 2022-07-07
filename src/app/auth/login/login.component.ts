import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  login: FormGroup;

  clicked: boolean;
  constructor(private fb: FormBuilder) {
    this.clicked = false;
    this.login = this.fb.group({
      username: [null, [Validators.required]],
      password: [null, [Validators.required, Validators.pattern(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/
      )]],
    });

  }
  get loginForm() {

    return this.login.controls;
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    if (this.login.get('password')?.valid && this.login.get('username')?.valid && this.login.get('username')?.value.trim()) {
      console.log("data", this.login)
      this.clicked = true;

    }

  }

}
