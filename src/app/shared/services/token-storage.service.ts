import { Injectable } from '@angular/core';

let TOKEN_KEY = 'AuthToken';

@Injectable()
export class TokenStorageService {
	constructor() { }

	public saveToken(token: string) {
		window.localStorage.removeItem(TOKEN_KEY);
		window.localStorage.setItem(TOKEN_KEY, token);
	}

	public getToken(): string {
		return localStorage.getItem(TOKEN_KEY);
	}

	signOut() {
		window.localStorage.removeItem(TOKEN_KEY);
		window.localStorage.clear();
	}
}
