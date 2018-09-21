import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../user.model';
import { AuthService } from '../../auth/auth.service';


@Injectable()
export class UserService {
	constructor(private http: HttpClient, private authService: AuthService) { }

	getAll() {
		return this.http.get<User[]>(`/server/users`)
	}

	getById(id: number) {
		// return this.http.get(`${config.apiUrl}/users/` + id);
	}

	getCurrentUser() {
		const userLoggedIn = this.authService.userLoggedIn;
		return userLoggedIn;
	}

	// update(user: User) {
	// 	return this.http.put(`${config.apiUrl}/users/` + user.id, user);
	// }

	// delete(id: number) {
	// 	return this.http.delete(`${config.apiUrl}/users/` + id);
	// }
}
