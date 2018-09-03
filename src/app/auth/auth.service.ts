import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { User } from '../shared/user.model';

@Injectable()
export class AuthService {
	user: User = {
		email: '',
		password: ''
	};

	constructor(private router: Router) { }

	login(email: string, password: string) {
		this.user.email = email,
		this.user.password = password
	}

}
