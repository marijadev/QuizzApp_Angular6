import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { UserService } from '../services/users.service';

@Injectable()
export class UserType implements CanActivate {

    constructor(private router: Router, private userService: UserService) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
			if(this.userService.getCurrentUser() && this.userService.getCurrentUser().type === 1) {
				return true;
			}
		// not logged in so redirect to login page with the return url
		
        this.router.navigate(['/login'], { queryParams: { returnUrl: state.url }});
        return false;
    }
}