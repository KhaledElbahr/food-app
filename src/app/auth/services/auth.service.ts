import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  loggedIn: boolean = localStorage.getItem('isLogged')=== 'true' ? true : false;
  token!: string;
  userName!: string;

  setLoginData = {
    logged: false,
    message: ''
  };

  constructor(
    private http: HttpClient,
    private router: Router) { }

  isAuthenticated() {
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.loggedIn);
      }, 200);
    });
    return promise;
  }

  generateToken() {
    let d = new Date().getTime();

    if(window.performance && typeof window.performance.now === "function") {
      d += performance.now();
    }

    let token = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c)
    {
      let r = (d + Math.random() * 16) % 16 | 0;
      d = Math.floor(d / 16);
      return (c == 'x' ? r : (r&0x3|0x8)).toString(16);
    });
    return token;
  }

  login(loginInfo: any) {
    if (loginInfo.username === 'admin') {
      this.userName = 'recipes';
      this.token = this.generateToken();
      localStorage.setItem('token', this.token);
      localStorage.setItem('isLogged', 'true');
      this.loggedIn = localStorage.getItem('isLogged')=== 'true' ? true : false    ;


      this.setLoginData.logged = this.loggedIn;
      this.setLoginData.message = 'Logged in successfully';
      this.isAuthenticated();
    } else {
      this.setLoginData.logged = this.loggedIn;
      this.setLoginData.message = 'Not authorized!! You don\'t have access';
    };
    return this.setLoginData;
  }

  logout() {
    this.loggedIn = false;
    localStorage.setItem('isLogged', 'false');

    localStorage.removeItem('token');

    this.router.navigate(['']);
    this.userName = '';
    this.isAuthenticated();
    console.log('logged out');
  }
}
