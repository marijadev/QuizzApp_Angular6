export interface UserModel {
	username: string;
	name?: string;
	surname?: string;
	password: string;
	id?: number;
	admin?: number;
	phone?: number;
}

export class User implements UserModel {
	constructor(public username: string, public name: string, public surname: string, public password: string, public id?: number, public admin?: number, public phone?: number) { }
}