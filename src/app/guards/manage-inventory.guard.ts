import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanLoad, Route } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ManageInventoryGuard implements  CanLoad {
  
  constructor() { }

  canLoad(route: Route): boolean {
    return this.isAdmin();
  }

  private isAdmin(): boolean {
    return true;
  }
}
