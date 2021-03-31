import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AccountApi } from '../../../api/base';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root',
})
export class AuthGuard implements CanActivate {
    constructor(
        private account: AccountApi,
        private router: Router,
    ) { }

    canActivate(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot,
    ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
        const authGuardMode = next.data.authGuardMode || 'redirectToLogin';
        let pipe = isAuth => isAuth;

        if (authGuardMode === 'redirectToLogin')  {
            pipe = map(isAuth => isAuth || this.router.createUrlTree(['account/login']));
        } else if (authGuardMode === 'redirectToDashboard') {
            pipe = map(isAuth => !isAuth || this.router.createUrlTree(['account/dashboard']));
        }

        return this.account.user$.pipe(map(user => !!user), pipe);
    }
}
