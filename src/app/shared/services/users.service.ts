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

	// getTestById(testId: object) {
	// 	this.http.post(API_URL.userSingleTest, testId).subscribe(data => {
	// 		console.log('test', data)
	// 	})
	// }

	getCurrentUser() {
		const userLoggedIn = this.authService.userLoggedIn;
		return userLoggedIn;
	};
};
