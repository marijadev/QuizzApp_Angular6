import { Injectable, OnInit } from '@angular/core';
import { UserService } from './users.service';
import { User } from '../user.model';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../../auth/auth.service';
import { Subject, Observable } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class ProfileService implements OnInit {
	currentProfile: User;

	constructor(private usersService: UserService, private http: HttpClient, private authService: AuthService) { }

	ngOnInit() {
	}

	populateUser() {
		const currentUser = this.usersService.getCurrentUser();
		return currentUser;
	}

	onEditProfile(password: string, name: string, surname: string, phone: number) {
		const user = {
			password,
			name,
			surname,
			phone
		}
		this.authService.setUser(user);
		const currentUser = this.usersService.getCurrentUser();
		this.http.post('/server/edit', currentUser).subscribe(arg => console.log(arg));
	}
}
