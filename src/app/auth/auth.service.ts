import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { User } from '../shared/user.model';

@Injectable()
export class AuthService {
	user: User = {
		email: '',
		password: '',
		type: 'admin',
		phone: null,
		id: null
	};

	constructor(private router: Router) { }

	login(email: string, password: string) {
		this.user.email = email,
			this.user.password = password
	}

	userType() {
		if (this.user.type === 'admin') {
			return 'admin';
		} return 'user';
	}

}
