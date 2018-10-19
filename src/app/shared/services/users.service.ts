import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../user.model';
import { AuthService } from '../../auth/auth.service';
import { API_URL } from '../constants';


@Injectable()
export class UserService {
	constructor(private http: HttpClient, private authService: AuthService) { }

	getAll() {
		return this.http.get<User[]>(API_URL.allUsers);
	};

	getCurrentUser() {
		const userLoggedIn = this.authService.userLoggedIn;
		return userLoggedIn;
	};
};
