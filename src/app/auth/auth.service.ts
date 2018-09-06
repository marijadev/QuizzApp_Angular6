import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { User } from '../shared/user.model';

@Injectable()
export class AuthService {
	user: User = {
		email: '',
		password: '',
		status: '',
		phone: null,
		id: null
	};


	constructor(private router: Router) { }

	login(email: string, password: string, status: string) {
		this.user.email = email,
		this.user.password = password;
		this.user.status = status;
	}

	userType() {
		if (this.user.status === 'admin') {
			return 'admin';
		} return 'user';
	}

}
