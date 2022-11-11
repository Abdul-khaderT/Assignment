import { Injectable } from "@angular/core";
import { CanActivate, UrlTree, Router } from "@angular/router";
import { RoutePaths } from "@bank/shared";
import { Observable } from "rxjs";

@Injectable({
    providedIn: "root",
})
export class AuthGuard implements CanActivate {
    constructor(public router: Router) {}

    canActivate(): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
        if (localStorage.getItem("user")) {
            return true;
        }
        this.router.navigate([RoutePaths.AUTH_LOGIN])
        return false;
    }
}
