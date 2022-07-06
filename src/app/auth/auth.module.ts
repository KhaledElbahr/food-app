import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckboxModule } from 'primeng/checkbox';

import { ReactiveFormsModule } from '@angular/forms';
import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { InputTextModule } from 'primeng/inputtext';
import { DividerModule } from "primeng/divider";
import { PasswordModule } from 'primeng/password';

@NgModule({
  declarations: [
    LoginComponent
  ],
import { RegisterComponent } from './register/register.component';
import { ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';

@NgModule({
  declarations: [RegisterComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule,
    CheckboxModule,
    InputTextModule,
    DividerModule,
    PasswordModule,

  ]
    InputTextModule,
  ],
  exports: [RegisterComponent],
})
export class AuthModule {}
