import { Injectable, OnInit, OnDestroy } from '@angular/core';
import { UserService } from './users.service';
import { User } from '../user.model';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../../auth/auth.service';
import { Subject, Observable } from 'rxjs';
import { API_URL } from '../constants';

@Injectable({
	providedIn: 'root'
})
export class ProfileService implements OnInit, OnDestroy {
	currentProfile: User;
	subscription;

	constructor(private usersService: UserService, private http: HttpClient, private authService: AuthService) { }

	ngOnInit() { }

	populateUser() {
		const currentUser = this.usersService.getCurrentUser();
		this.currentProfile = currentUser;
		// console.log('curr profile',this.currentProfile)
		return currentUser;
	};

	onEditProfile(user: User) {
		this.authService.setUser(user);
		this.currentProfile = user;
		console.log('afterEditProfile',this.currentProfile)
		this.http.post(API_URL.edit, this.currentProfile).subscribe(arg => arg);

	}

	// onEditProfile(password: string, name: string, surname: string, phone: number) {
	// 	const user = {
	// 		password,
	// 		name,
	// 		surname,
	// 		phone
	// 	};
	// 	this.authService.setUser(user);
	// 	const currentUser = this.usersService.getCurrentUser();
	// 	this.currentProfile = currentUser;
	// 	console.log('profile service user',this.currentProfile)
	// 	this.http.post(API_URL.edit, this.currentProfile).subscribe(arg => arg);
	// };

	ngOnDestroy() {
		// this.subscription.unsubscribe();
	}
};
