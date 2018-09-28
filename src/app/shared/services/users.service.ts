import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../user.model';
import { AuthService } from '../../auth/auth.service';
import { API_URL } from '../constants';


@Injectable()
export class UserService {
	constructor(private http: HttpClient, private authService: AuthService) { }

	getAll() {
		return this.http.get<User[]>('/server/admin/findUsers')
	}

	getById(id: number) {
		// return this.http.get(`${config.apiUrl}/users/` + id);
	}

	getCurrentUser() {
		const userLoggedIn = this.authService.userLoggedIn;
		return userLoggedIn;
	}
}
