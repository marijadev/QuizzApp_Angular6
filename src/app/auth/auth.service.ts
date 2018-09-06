import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { User } from '../shared/user.model';
import { Observable, of, throwError } from 'rxjs';

@Injectable()
export class AuthService {
	user: User = {
		email: '',
		password: '',
		status: '',
		phone: null,
		id: null
	};

	sampleUsers = [{ id: 1, email: 'sample@test.com', password: '111', status: 'admin' },
	{ id: 2, email: 'admin@test.com', password: '222', status: 'admin' },
	{ id: 1, email: 'foo@test.com', password: '333', status: 'user' },
	{ id: 2, email: 'user@test.com', password: '444', status: 'user' }];


	constructor() { }

	login(email: string, password: string) {
		
		const user = this.getUser(email,password);
		if(!!user) {
			this.user.email = email,
			this.user.password = password;
			this.user.status = status;
			return of(user.status);
		}
		return throwError('user not found');
		
		
	}

	userType() {
		if (this.user.status === 'admin') {
			return 'admin';
		} return 'user';
	}

	private getUser(email, password){
		return this.sampleUsers.find(user => user.email === email && user.password === password);
	}


	
	

}
