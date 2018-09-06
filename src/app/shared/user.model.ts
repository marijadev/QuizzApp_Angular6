export interface UserModel {
	email: string;
	password: string;
	id?: number;
	status?: string;
	phone?: number;
}

export class User implements UserModel {
	constructor(public email: string, public password: string, public id?: number, public status?: string, public phone?: number) { }
}