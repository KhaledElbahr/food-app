import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { NavbarComponent } from './navbar/navbar.component';
// NGPrime
import {ButtonModule} from 'primeng/button';
import {RippleModule} from 'primeng/ripple';
import {MenubarModule} from 'primeng/menubar';
import {MenuItem} from 'primeng/api';
import { InputTextModule } from 'primeng/inputtext';
import { TagModule } from 'primeng/tag';
import {CardModule} from 'primeng/card';

@NgModule({
  declarations: [
    NavbarComponent
  ],
  imports: [
    CommonModule,
    CoreRoutingModule,
    ButtonModule,
    RippleModule,
    MenubarModule,
    InputTextModule,
    TagModule,
    CardModule,
  ],
  exports: [
    NavbarComponent
  ]
})
export class CoreModule { }
