import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from './providers/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public breadcrumb: String;
  private isLoggedIn: Boolean;
  private user_displayName: String;
  private user_email: String;
  constructor(public authService: AuthService, private router: Router) {
    this.authService.af.auth.subscribe(
      (auth) => {
        if (auth == null) {
          this.isLoggedIn = false;
          this.user_displayName = '';
          this.user_email = '';
          this.router.navigate(['login']);
        } else {
          this.isLoggedIn = true;
          this.user_displayName = auth.google.displayName;
          this.user_email = auth.google.email;
          this.router.navigate([this.router.url]);
          this.breadcrumb = this.router.url;
        }
      }
    );
  }

  setBreadcrumb(breadbrumb){
    this.breadcrumb = breadbrumb;
  }

  getCrudOperation(){
    return this.router.url.split('/')[this.router.url.split('/').length-1];
  }

  getKey(){
    return this.router.url.split('/')[this.router.url.split('/').length-2];
  }
  
  logout() {
    this.authService.logout();
    this.router.navigate(['login']);
  }
}
