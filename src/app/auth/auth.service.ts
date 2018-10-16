import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, flatMap } from 'rxjs/operators';

import { User } from '../shared/user.model';

import { TokenStorageService } from '../shared/services/token-storage.service';
import { API_URL } from '../shared/constants';

@Injectable()
export class AuthService {
	isLoggedIn: boolean = false;
	private user: User = {
		id: 0,
		username: null,
		password: null,
		name: null,
		surname: null,
		phone: 0,
		admin: 0,
	};
	admin: number;

	constructor(private http: HttpClient, private tokenService: TokenStorageService) { }

	login(username: string, password: string): Observable<any> {
		this.user.username = username;
		this.user.password = password;

		const loginObj = {
			username: username,
			password: password
		}

		return this.http.post<any>(API_URL.login, loginObj, { observe: 'response' }).pipe(flatMap(res => {
			const token = res.headers.get('authorization');
			this.tokenService.saveToken(token);
			if (token) {
				return this.http.get<any>(API_URL.getUser).pipe(
					map(user => {
						if (user) {
							this.user.id = user.id;
							this.user.username = user.username;
							this.user.password = user.password;
							this.user.name = user.name;
							this.user.surname = user.surname;
							this.user.phone = user.phone;
							this.user.admin = user.admin;
							localStorage.setItem('currentUser', JSON.stringify(user))
						}
						
						return user;
					})
				);
			}
		}
		))
	}

	public get userLoggedIn() {
		if (localStorage.getItem('currentUser')) {
			return JSON.parse(localStorage.getItem('currentUser'));
		}
		return this.user;
	}

	public setUser(user) {
		this.user.password = user.password;
		this.user.name = user.name;
		this.user.surname = user.surname;
		this.user.phone = user.phone;
		localStorage.setItem('currentUser', JSON.stringify(this.user))
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






