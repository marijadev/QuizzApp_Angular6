import { Injectable } from '@angular/core';
import { UserService } from './users.service';
import { User } from '../user.model';

@Injectable({
	providedIn: 'root'
})
export class ProfileService {
	currentProfile: User;

	constructor(private usersService: UserService) { }

	populateUser() {
		const currentUser = this.usersService.getCurrentUser();
		return currentUser;
	}
	 

}
