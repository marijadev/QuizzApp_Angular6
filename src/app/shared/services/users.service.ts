import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../user.model';
import { AuthService } from '../../auth/auth.service';
import { API_URL } from '../constants';
import { SingleTest } from '../single-test.model';


@Injectable()
export class UserService {

	constructor(private http: HttpClient, private authService: AuthService) { }

	getAll(usersObj) {
		return this.http.post<User[]>(API_URL.allUsers, usersObj);
	};

	getAllTests(url, obj) {
		return this.http.post<SingleTest[]>(url, obj);
	}

	getCurrentUser() {
		const userLoggedIn = this.authService.userLoggedIn;
		return userLoggedIn;
	};
};
