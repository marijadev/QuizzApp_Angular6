import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { User } from '../shared/user.model';
import { Observable, of, throwError } from 'rxjs';

@Injectable()
export class AuthService {
	user: User = {
		email: '',
		password: '',
		admin: 0,
		phone: null,
		id: null
	};

	sampleUsers = [{ id: 1, email: 'sample@test.com', password: '111', admin: 1 },
	{ id: 2, email: 'admin@test.com', password: '222', admin: 1 },
	{ id: 1, email: 'foo@test.com', password: '333', admin: 0 },
	{ id: 2, email: 'user@test.com', password: '444', admin: 0 }];


	constructor() { }

	login(email: string, password: string) {
		
		const user = this.getUser(email,password);
		if(!!user) {
			this.user.email = email,
			this.user.password = password;
			this.user.admin = 1;
			return of(user.admin);
		}
		return throwError('user not found');
		
		
	}

	userType() {
		if (this.user.admin === 1) {
			return 1;
		} return 0;
	}

	private getUser(email, password){
		return this.sampleUsers.find(user => user.email === email && user.password === password);
	}


	
	

}
