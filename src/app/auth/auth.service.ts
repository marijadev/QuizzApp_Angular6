import { Injectable } from '@angular/core';
import { User } from '../shared/user.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { TokenStorageService } from '../shared/services/token-storage.service';


const httpOptions = {
	headers: new HttpHeaders({
		'Content-Type': 'application/json',
		  'Authorization': ''
	})
};

@Injectable()
export class AuthService {
	admin: number;
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

	constructor(private http: HttpClient, private token: TokenStorageService) { 
	}


	login(username: string, password: string): Observable<any> {
		this.user.username = username;
		this.user.password = password;
		return this.http.post<any>('/server/login', this.user, {observe: 'response'}).pipe(map(res=> console.log(res.headers.get('authorization'))))


		// .pipe(
		// 	map(user => {

		// 		if (user) {
		// 			this.user.id = user.id;
		// 			this.user.username = user.username;
		// 			this.user.password = user.password;
		// 			this.user.name = user.name;
		// 			this.user.surname = user.surname;
		// 			this.user.phone = user.phone;
		// 			this.user.admin = user.admin;
		// 			localStorage.setItem('currentUser', JSON.stringify(user))
		// 		}
		// 		return user;
		// 	})
		// );
	}

	public get userLoggedIn() {
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






