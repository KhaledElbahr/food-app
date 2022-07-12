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
            "icon": "fa-solid fa-pizza-slice",
            "routerLink": "recipes/pizza"
            
          },
          {
            "label": "Salad",
            "icon": "fa-solid fa-bowl-food",
            "routerLink": "recipes/salad"
          },
          {
            "label": "Beef",
            "icon": "fa-solid fa-burger",
            "routerLink": "recipes/beef"
          },
          {
            "label": "Top Ranked",
            "icon": "fa-solid fa-ranking-star",
            "routerLink": "recipes/top-rank",
          }
      ];
  }

}
