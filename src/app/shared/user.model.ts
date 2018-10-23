export interface UserModel {
	id?: number;
	username: string;
	password: string;
	name?: string;
	surname?: string;
	phone?: number;
	admin?: number;
	photo?: string;
}

export class User implements UserModel {
	constructor(
		public id: number,
		public username: string,
		public password: string,
		public name: string,
		public surname: string,
		public phone?: number,
		public admin?: number,
		public photo?: string
	) { }
}