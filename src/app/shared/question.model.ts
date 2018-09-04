export interface QuestionModel {
	id: number;
	question: string;
	category: string;
	difficulty: string;
	type: string;
	answers: object[];
}

export class Question implements QuestionModel {
	constructor(
		public id: number,
		public question: string,
		public category: string,
		public difficulty: string,
		public type: string,
		public answers: object[]
	) { }
}