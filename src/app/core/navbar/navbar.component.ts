import { Component, OnInit, DoCheck } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { MenuItem } from 'primeng/api';
import { SearchService } from 'src/app/shared/services/search.service';
import { AuthService } from './../../auth/services/auth.service';

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
    private authService: AuthService, private searchService: SearchService) { }

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
        "routerLink": "top-rank",
      }
    ];
  }

  ngDoCheck(): void {
    if (this.isLoggedIn !== this.authService.loggedIn) {
      this.isLoggedIn = this.authService.loggedIn;
    }
  }

  onLogout() {
    this.authService.logout();
  }

  onInsertText(event: any) {
    this.searchService.setSearchWord(this.searchText);
  }

}
