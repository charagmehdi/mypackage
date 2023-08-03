import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { CoreService } from './core.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService implements CanActivate {
  constructor(public coreService: CoreService, private route: Router) {}
  canActivate() {
    if (this.coreService.isValidUser) {
      return true;
    } else {
      window.alert("You don't have permission to view this page,Please Login");
      this.route.navigate(['/login']);
      return false;
    }
  }
}
