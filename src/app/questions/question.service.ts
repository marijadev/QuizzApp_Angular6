import { Injectable } from '@angular/core';


@Injectable()
export class QuestionService {
	isChildFormValid: number = 0;
	questionDifficulty = ['Easy', 'Medium', 'Difficult'];
	questionCategory;

	constructor() { }

}
