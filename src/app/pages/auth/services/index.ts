import { inject, Injectable, signal } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly router = inject(Router);
  private readonly _isLoggedIn = signal(false); // состояние логина

  readonly isLoggedIn = this._isLoggedIn.asReadonly();

  login(): void {
    this._isLoggedIn.set(true);
    this.router.navigate(['/']); // редирект на home
  }

  logout(): void {
    this._isLoggedIn.set(false);
    this.router.navigate(['/login']); // редирект на login
  }
}
