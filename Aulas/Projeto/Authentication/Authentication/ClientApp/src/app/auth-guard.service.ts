import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot, CanLoad, CanActivateChild, Route } from '@angular/router'
import { Observable } from 'rxjs';
import { AuthService, IAuthStatus } from './auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate, CanActivateChild, CanLoad {

  protected currentAuthStatus: IAuthStatus = { isAuthenticated: false, userId: '', role: '' }
  constructor(
    protected authService: AuthService,
    protected router: Router
  ) {
    this.currentAuthStatus = this.authService.getUser()
    this.authService.authStatus.subscribe(
      authStatus => (this.currentAuthStatus = authStatus)
    )
  }

  canLoad(route: Route): boolean | Observable<boolean> | Promise<boolean> {
    return this.checkLogin()
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
    return this.checkLogin(route)
  }

  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
    return this.checkLogin(childRoute)
  }

  protected checkLogin(route?: ActivatedRouteSnapshot) {
    let roleMatch = true
    let params: any
    if (route) {
      const expectedRole = route.data.expectedRole
      if (expectedRole) {
        roleMatch = this.currentAuthStatus.role === expectedRole
      }
      if (roleMatch) {
        params =
        {
          redirectUrl: route.pathFromRoot.map(r => r.url).join('/')
        }
      }
    }
    if (!this.currentAuthStatus.isAuthenticated || !roleMatch) {
      this.showAlert(this.currentAuthStatus.isAuthenticated, roleMatch)
      this.router.navigate(['login', params || {}])
      return false
    }
    return true
  }
  private showAlert(isAuth: boolean, roleMatch: boolean) {
    if (!isAuth) {
      alert('You must login to continue')
    }
    if (!roleMatch) {
      alert('You do not have the permissions to view this resource')
    }
  }

}
