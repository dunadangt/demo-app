import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthStateService } from './auth-state.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private service: AuthStateService, private router: Router) { }

  canActivate(): boolean {
    if (!this.service.isLoggedIn) {
      this.router.navigateByUrl('/login');
      return false;
    }
    return true;
  }
}
