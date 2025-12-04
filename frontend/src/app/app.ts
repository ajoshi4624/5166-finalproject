import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive, Router } from '@angular/router';
import { NgIf } from '@angular/common';
import { AuthService } from './services/auth';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive, NgIf],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class AppComponent {
  constructor(public auth: AuthService, private router: Router) {}

  showNav(): boolean {
    const isLoginRoute = this.router.url.startsWith('/login');
    return this.auth.isLoggedIn() && !isLoginRoute;
  }

  logout(): void {
    this.auth.logout();
  }
}
