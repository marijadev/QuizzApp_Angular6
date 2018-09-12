export interface UserModel {
	email: string;
	password: string;
	id?: number;
	admin?: number;
	phone?: number;
}

export class User implements UserModel {
	constructor(public email: string, public password: string, public id?: number, public admin?: number, public phone?: number) { }
}