import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { User } from '../shared/user.model';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { error } from '@angular/compiler/src/util';

const httpOptions = {
	headers: new HttpHeaders({
	  'Content-Type':  'application/json',
	//   'Authorization': 'my-auth-token'
	})
  };

@Injectable()
export class AuthService {
	user: User = {
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
		return this.http.post<User>('/server/login', this.user);
	}

	// login(username: string, password: string): Observable<User> {
	// 	let body = JSON.stringify({
	// 		'username': username,
	// 		'password': password
	// 	})
	// return this.http.post('http://localhost:8080/login', body).pipe(map(response => new User(response.username, response.password)));

	// const user = this.getUser(email,password);
	// if(!!user) {
	// 	this.user.email = email,
	// 	this.user.password = password;
	// 	this.user.admin = 1;
	// 	return of(user.admin);
	// }
	// return throwError('user not found');


}

	// userType() {
	// 	if (this.user.admin === 1) {
	// 		return 1;
	// 	} return 0;
	// }

	// private getUser(email, password){
		// return this.user.find(user => user.email === email && user.password === password);
	// }





