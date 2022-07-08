import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: [`
  :host ::ng-deep button {
      margin-right: .5em;
  }`]
})
export class NavbarComponent implements OnInit {
  items: MenuItem[] =[];

  constructor(private primengConfig: PrimeNGConfig) {}

  ngOnInit() {
    this.primengConfig.ripple = true;
    this.items = [
          {
            "label": "Pizza",
            "icon": "",
            "routerLink": "recipes/pizza"

          },
          {
            "label": "Salad",
            "icon": "",
            "routerLink": "recipes/salad"
          },
          {
            "label": "Beef",
            "icon": "",
            "routerLink": "recipes/beef"
          },
          {
            "label": "Top Ranked",
            "icon": "",
            "routerLink": "recipes/top-rank",
          }
      ];
  }

}
