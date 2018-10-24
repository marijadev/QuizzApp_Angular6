import { User } from './user.model';

export interface UserTest {
	id?: number;
	date: number;
	questions?: [],
	result?: number,
	status?: number,
	user: User
}

export class SingleTest implements SingleTest {
	constructor(
		public id: number,
		public date: string,
		public questions: [],
		public result: number,
		public status: number,
		public user: User
	) { }
};