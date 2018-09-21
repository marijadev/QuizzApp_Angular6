import { Injectable } from '@angular/core';
import { User } from '../shared/user.model';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from "rxjs/operators";

const httpOptions = {
	headers: new HttpHeaders({
		'Content-Type': 'application/json',
		//   'Authorization': 'my-auth-token'
	})
};

@Injectable()
export class AuthService {
	admin: number;
	isLoggedIn: boolean = false;
	private user: User = {
		username: null,
		name: null,
		surname: null,
		password: null,
		id: 0,
		admin: 0,
		phone: 0,
	};

	constructor(private http: HttpClient) { }


	login(username, password): Observable<User> {
		this.user.username = username;
		this.user.password = password;
		return this.http.post<User>('/server/login', this.user)
			.pipe(
				map(user => {
					// if(user && user.token) {
					this.user.admin = user.admin;
					this.user.id = user.id;
					this.user.name = user.name;
					this.user.surname = user.surname;
					this.user.phone = user.phone;
					this.user.password = user.password;
					this.user.username = user.username;

					// 	localStorage.setItem('currentUser', JSON.stringify(user))
					// }
					return user;
				})
			);
	}

	public get userLoggedIn() {
		return this.user;
	}

	logout() {
		localStorage.removeItem('currentUser');
	}

	userType() {
		if (this.user.admin === 1) {
			return 1;
		}
		return 0;
	}
}






