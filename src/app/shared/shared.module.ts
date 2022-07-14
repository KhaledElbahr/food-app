import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NotFoundComponent } from './components/not-found/not-found.component';
import { DropdownDirective } from './services/dropdown.directive';
// PrimeNg
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { MenubarModule } from 'primeng/menubar';
import { InputTextModule } from 'primeng/inputtext';
import { DividerModule } from 'primeng/divider';
import { TagModule } from 'primeng/tag';
import { CardModule } from 'primeng/card';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { TabMenuModule } from 'primeng/tabmenu';
import { CheckboxModule } from 'primeng/checkbox';
import { PasswordModule } from 'primeng/password';
import { DropdownModule } from 'primeng/dropdown';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    // PrimeNg
    ButtonModule,
    RippleModule,
    MenubarModule,
    InputTextModule,
    ProgressSpinnerModule,
    DividerModule,
    TagModule,
    CardModule,
    TabMenuModule,
    PasswordModule,
    CheckboxModule,
    DropdownModule,
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NotFoundComponent,
    DropdownDirective,
    // PrimeNg
    ButtonModule,
    RippleModule,
    MenubarModule,
    InputTextModule,
    ProgressSpinnerModule,
    DividerModule,
    TagModule,
    CardModule,
    TabMenuModule,
    PasswordModule,
    CheckboxModule,
    DropdownModule,
  ],
  declarations: [
    NotFoundComponent,
    DropdownDirective
  ]
})
export class SharedModule {}
