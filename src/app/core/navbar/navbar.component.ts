import { Component, OnInit, DoCheck } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { MenuItem } from 'primeng/api';
import { SearchService } from 'src/app/shared/services/search.service';
import { AuthService } from './../../auth/services/auth.service';
import { Router, Event } from '@angular/router';
import { NavigationStart, NavigationError, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: [`
  :host ::ng-deep button {
      margin-right: .5em;
  }`]
})
export class NavbarComponent implements OnInit, DoCheck {
  isLoggedIn: boolean = false;
  items: MenuItem[] = [];
  searchText: string = '';
  constructor(
    private primengConfig: PrimeNGConfig,
    private authService: AuthService,
    private searchService: SearchService,
    private router: Router) {
      this.router.events.subscribe((event: Event) => {
        if (event instanceof NavigationStart) {
            this.searchService.setSearchWord('');
            this.searchText = '';
        }
      })
    }

  ngOnInit() {
    this.primengConfig.ripple = true;
  }

  ngDoCheck(): void {
    if (this.isLoggedIn !== this.authService.loggedIn) {
      this.isLoggedIn = this.authService.loggedIn;

    if (this.isLoggedIn) {
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
          "routerLink": "top-rank",
        }
      ];
    }

    if (!this.isLoggedIn) {
      this.items = []
    }
  }

    // if (this.isLoggedIn) {
      // this.items = [
      //   {
      //     "label": "Pizza",
      //     "icon": "",
      //     "routerLink": "recipes/pizza"
      //   },
      //   {
      //     "label": "Salad",
      //     "icon": "",
      //     "routerLink": "recipes/salad"
      //   },
      //   {
      //     "label": "Beef",
      //     "icon": "",
      //     "routerLink": "recipes/beef"
      //   },
      //   {
      //     "label": "Top Ranked",
      //     "icon": "",
      //     "routerLink": "top-rank",
      //   }
      // ]
    // }
  }

  onLogout() {
    this.authService.logout();
    location.reload();
  }

  onInsertText(event: any) {
    this.searchService.setSearchWord(this.searchText);
  }

}
