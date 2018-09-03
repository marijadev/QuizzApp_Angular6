export interface UserModel {
	email: string;
	password: string;
	id?: number;
	type?: string;
	phone?: number;
}

export class User implements UserModel {
	constructor(public email: string, public password: string, public id?: number, public type?: string, public phone?: number) { }
}