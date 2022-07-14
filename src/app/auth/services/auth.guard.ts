import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import {
  CanLoad,
  CanActivate,
  Route,
  Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlSegment,
} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanLoad {
  constructor(private authService: AuthService, private router: Router) {}

  canLoad(route: Route): Observable<boolean> | Promise<boolean> | boolean {
    return this.authService.isAuthenticated().then((Authenticated: any) => {
      if (Authenticated) {
        return true;
      } else {
        this.router.navigate(['/']);
        return false;
      }
    });
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    return this.authService.isAuthenticated().then((Authenticated: any) => {
      if (Authenticated) {
        return true;
      } else {
        this.router.navigate(['/']);
        return false;
      }
    });
  }
}
